/**
 * @providesModule ParallaxComposition
 */
'use strict';

import isArray from 'lodash/lang/isArray';
import React,{Component} from 'react';
import {
  Animated,
  ScrollView
} from 'react-native';

import ParallaxImage from './ParallaxImage';

var applyPropsToParallaxImages = function(children, props) {
  if(isArray(children)) {
    return children.map(child => {
      if(isArray(child)) {
        return applyPropsToParallaxImages(child, props);
      }
      if(child.type === ParallaxImage) {
        return React.cloneElement(child, props);
      }
      return child;
    });
  }
  if(children.type === ParallaxImage) {
    return React.cloneElement(children, props);
  }
  return children;
};

var ParallaxScrollViewComposition = React.createClass({
  propTypes: {
    scrollViewComponent: React.PropTypes.func,
  },

  componentWillMount() {
    var scrollY = new Animated.Value(0);
    this.setState({ scrollY });
    this.onParallaxScroll = Animated.event(
      [{nativeEvent: {contentOffset: {y: scrollY}}}]
    );
  },

  render() {
    let { children, scrollViewComponent, onScroll, ...props } = this.props;
    const { scrollY } = this.state;
    const ScrollComponent = scrollViewComponent || ScrollView;
    const handleScroll = (onScroll
      ? event => { this.onParallaxScroll(event); onScroll(event); }
      : this.onParallaxScroll
    );
    children = children && applyPropsToParallaxImages(children, { scrollY });
    return (
      <ScrollComponent
        ref={component => {
          this._root = component;
          if(typeof ref === 'function') {
            ref(component);
          }
        }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        {...props}
      >
        {children}
      </ScrollComponent>
    );
  }
});

module.exports = ParallaxScrollViewComposition;
