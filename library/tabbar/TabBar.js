'use strict';
import React, {Component, PropTypes} from 'react';
import {
  ScrollView,
  View,
} from 'react-native';


const SCROLL_VIEW_REF = 'scrollViewRef'

export default class TabBar extends Component {

  static propTypes = {
    /**
     * Required function which renders the tab at a given index. Will be
     * invoked with the index, the selectedTab and the tabBar object
     *
     * ```
     * (index, selectedTab, tabBar) => {}
     *
     * ```
     */
    renderTab: PropTypes.func.isRequired,

    /**
     * Required function which renders the tab content at a given index. Will be
     * invoked with the index, the selectedTab and the tabBar object
     *
     * ```
     * (index, selectedTab, tabBar) => {}
     *
     * ```
     */
    renderContent: PropTypes.func.isRequired,

    tabCount: PropTypes.number.isRequired,

    tabContainerStyle: PropTypes.object,
  }

  state = {
    selectedTab: 0,
    width: 0,
    height: 0
  }

  constructor(props) {
    super(props);
  }

  _renderTabs() {
    let tabs = [];
    for(let i = 0; i < this.props.tabCount; i++) {
      let tab = null;
      if(this.props.renderTab) {
        tab = this.props.renderTab(i, this.state.selectedTab, this);
      }

      tabs.push(
        <View
          key={'tab#' + i}
          collapsable={true}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {tab}
        </View>
      );
    }
    return tabs;
  }

  _renderContent() {
    if(!this.state.width || !this.state.height) {
      return null;
    }

    let contents = []
    for(let i = 0; i < this.props.tabCount; i++) {
      let content = null;
      if(this.props.renderContent) {
        content = this.props.renderContent(i, this.state.selectedTab, this);

        if(!content) {
          content = <View />;
        }

        content.props.style.width = this.state.width;
        content.props.style.height = this.state.height;
      }
      contents.push(content);
    }
    return contents;
  }

  render() {
    console.log('render...' + JSON.stringify(this.state));

    return (
      <View
        {...this.props}>
        <ScrollView
          style={{flex: 1}}
          ref={SCROLL_VIEW_REF}
          onLayout={this._onLayout.bind(this)}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>

          {this._renderContent()}

        </ScrollView>

        <View
          style={[this.props.tabContainerStyle, {flexDirection: 'row', position: 'relative'}]}>
          {this._renderTabs()}
        </View>
      </View>
    );
  }

  _onLayout(e) {
    console.log('onLayout...' + JSON.stringify(e.nativeEvent));
    let {width, height} = e.nativeEvent.layout;
    this.setState({width, height});
  }

  selectTab(index) {
    if(index !== this.state.selectedTab) {
      this.setState({
        selectedTab: index
      });
      this.refs[SCROLL_VIEW_REF].scrollTo({
        x: this.state.width * index, animated: false});
    }
  }
}