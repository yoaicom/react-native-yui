import React, {Component, PropTypes} from 'react';

import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default class ParallaxView extends Component {

  static get ScrollView() {
    return require('./ParallaxScrollView').default;
  }

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0
    };
  }

  handleLayout() {
    (this._touchable || this._container).measure(this.handleMeasure.bind(this));
  }

  handleMeasure(ox, oy, width, height, px, py) {
    this.setState({
      offsetY: py,
      offsetX: px,
      height,
      width
    });
  }

  render() {
    let {height, width, offsetX, offsetY} = this.state;
    let {
      scrollValue,
      parallaxFactor,
      style,
      children,
      overlayStyle,
      imageStyle,
      horizontal,
      onPress,
      ...props
    } = this.props;

    let parallaxPadding = horizontal ? width * parallaxFactor : height * parallaxFactor;

    let parallaxStyle = {
      height: horizontal ? height : height + parallaxPadding * 2,
      width: !horizontal ? width : width + parallaxPadding * 2
    };

    if (scrollValue) {
      parallaxStyle.transform = [
        horizontal
          ? {translateY: 0}
          : {
          translateY: scrollValue.interpolate({
            inputRange: [offsetY - height, offsetY + WINDOW_HEIGHT + height],
            outputRange: [-parallaxPadding, parallaxPadding]
          })
        },
        !horizontal
          ? {translateX: 0}
          : {
          translateX: scrollValue.interpolate({
            inputRange: [offsetX - width, offsetX + WINDOW_WIDTH + width],
            outputRange: [-parallaxPadding, parallaxPadding]
          })
        }
      ]
    } else {
      parallaxStyle.transform = [horizontal ? {translateY: -parallaxPadding} : {translateX: -parallaxPadding}]
    }
    let content = (
      <View
        ref={(ref) => {this._container = ref}}
        style={[style,styles.container]}
        onLayout={this.handleLayout.bind(this)}
      >
        <Animated.Image
          {...props}
          style={[parallaxStyle,imageStyle]}
          pointerEvents='none'
        />
        <View style={[styles.overlay, overlayStyle]}>
          {children}
        </View>
      </View>
    );
    if (onPress) {
      return (
        <TouchableOpacity
          ren={(ref) => {this._touchable = ref}}
        >
          {content}
        </TouchableOpacity>
      )
    }
    return content;
  }
}

var styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative'
  },
  overlay: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  }
});

ParallaxView.propsTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  parallaxFactor : PropTypes.number,
  horizontal: PropTypes.bool,
  overlayStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ])
};
ParallaxView.defaultProps = {
  horizontal: false,
  parallaxFactor : 0.3
};