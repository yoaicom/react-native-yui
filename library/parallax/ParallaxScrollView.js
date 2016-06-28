import React, {Component, PropTypes} from 'react';
import {
  Animated,
  ScrollView
} from 'react-native';

import ParallaxView from './ParallaxView';


var applyPropsToParallaxImages = function (children, props) {

  if (children instanceof Array) {
    return children.map(child => {
      if (child instanceof Array) {
        return applyPropsToParallaxImages(child, props);
      }
      if (child.type === ParallaxView) {
        return React.cloneElement(child, props);
      }
      return child;
    });
  }
  if (children.type === ParallaxView) {
    return React.cloneElement(children, props);
  }
  return children;
};


export default class ParallaxScrollView extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    var scrollValue = new Animated.Value(0);
    this.setState({scrollValue});
  }

  onParallaxScroll(event) {
    const {nativeEvent: {contentOffset: {y: offsetY, x: offsetX}}} = event;
    this.state.scrollValue.setValue( this.props.horizontal ? offsetX : offsetY);
  }

  render() {
    let {children, onScroll, horizontal, ...props} = this.props;
    let {scrollValue} = this.state;
    let handleScroll = (onScroll
        ? event => { this.onParallaxScroll(event); onScroll(event); }
        : this.onParallaxScroll
    );
    children = children && applyPropsToParallaxImages(children, {scrollValue, horizontal});
    return (
      <ScrollView
        {...props}
        scrollEventThrottle={16}
        onScroll={handleScroll.bind(this)}
        horizontal={horizontal}
      >
        {children}
      </ScrollView>
    )
  }
}
