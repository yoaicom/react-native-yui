import React, {Component} from 'react';
import {
  ScrollView
} from 'react-native';

export default class ViewPager extends Component {

  static defaultProps = {
    initialPage: 0,
  }

  state = {
    width: 0,
    height: 0
  };

  curPage = -1;
  curState = 'idle';

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...')

    this.setPageWithoutAnimation(this.props.initialPage);
  }

  render() {
    console.log('render...' + JSON.stringify(this.state));

    let children = undefined;
    if (this.state.width && this.state.height) {
      children = React.Children.map(this.props.children, (child)=> {
        let newProps = {
          ...child.props,
          style: [child.props.style, {
            width: this.state.width,
            height: this.state.height,
            position: 'relative',
            margin: 0,
            marginLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginHorizontal: 0,
            marginVertical: 0
          }]
        };

        return React.createElement(child.type, newProps);
      });
    }

    return (
      <ScrollView
        {...this.props}
        children={children}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ref={this._onRef.bind(this)}
        onLayout={this._onLayout.bind(this)}
        onScroll={this._onScroll.bind(this)}
        onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}
        onScrollEndDrag={this._onScrollEndDrag.bind(this)}
        onMomentumScrollBegin={this._onMomentumScrollBegin.bind(this)}
        onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
        scrollEventThrottle={50}
      />
    );
  }

  _onLayout(e) {
    console.log('onLayout...' + JSON.stringify(e.nativeEvent));
    this.props.onLayout && this.props.onLayout(e);

    let {width, height} = e.nativeEvent.layout;
    this.setState({width, height});
  }

  _onRef(ref) {
    this.scrollViewRef = ref;
  }

  _onScroll(e) {
    //console.log('onScroll...' + JSON.stringify(e.nativeEvent.contentOffset));

    let x = e.nativeEvent.contentOffset.x;
    let position = Math.floor(x / this.state.width);
    let offset = x / this.state.width - position;

    this.props.onPageScroll && this.props.onPageScroll({
      nativeEvent: {
        position: position,
        offset: offset
      }
    })
  }

  _onScrollEndDrag(e) {
    //console.log('onScrollEndDrag...' + JSON.stringify(e.nativeEvent.contentOffset));
  }

  _onScrollBeginDrag(e) {
    //console.log('onScrollBeginDrag...' + JSON.stringify(e.nativeEvent.contentOffset));
    this._onPageScrollStateChanged('dragging');
  }

  _onMomentumScrollBegin(e) {
    //console.log('onMomentumScrollBegin...' + JSON.stringify(e.nativeEvent.contentOffset));
    this._onPageScrollStateChanged('settling');
  }

  onMomentumScrollEnd(e) {
    //console.log('onMomentumScrollEnd...' + JSON.stringify(e.nativeEvent.contentOffset));
    let x = e.nativeEvent.contentOffset.x;
    let index = Math.floor(x / this.state.width);
    if(index * this.state.width === x) {
      this._onPageScrollStateChanged('idle');
      this._onPageSelected(index);
    }
  }

  _onPageScrollStateChanged(state: String) {
    if(this.curState !== state) {
      this.curPage = state;
      this.props.onPageScrollStateChanged && this.props.onPageScrollStateChanged({
        nativeEvent: {
          state: state
        }
      });
    }
  }

  _onPageSelected(index) {
    if(this.curPage !== index) {
      this.curPage = index;
      this.props.onPageSelected && this.props.onPageSelected({nativeEvent: {position: index}});
    }
  }

  _setPage(index, animated) {
    if(index < 0) {
      index = 0;
    } else if(index >= this.props.children.length) {
      index = this.props.children.length - 1;
    }

    this.scrollViewRef.scrollTo({x: this.state.width * index, animated: animated});

    if(!animated) {
      this._onPageSelected(index);
    }
  }

  setPage(index) {
    this._setPage(index, true);
  }

  setPageWithoutAnimation(index) {
    this._setPage(index, false);
  }
}