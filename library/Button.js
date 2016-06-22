import React, {
  Component,
  PropTypes
} from 'react';

import {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
const emptyView = <View/>

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      shouldCover: false,
      imageHeight: 0,
      imageWidth: 0
    },

      this.animations = {
        duration: 300,
        create: {},
        update: {
          springDamping: 0.7,
        },
      };
  }

  _getImageStyle() {
    let isEmptyObject = true;
    for (let prop in this.props.imageStyle) {
      isEmptyObject = false;
      break;
    }
    if (this.props.imageStyle && !isEmptyObject) {
      console.log(this.props.imageStyle)
      return this.props.imageStyle
    } else {
      return {
        height: this.props.style.height ? this.props.style.height : height,
        width: this.props.style.width ? this.props.style.width : width
      }
    }
  }

  _renderImage(imageStyle) {
    let resizeMode = this.props.children ? 'contain' : 'cover';
    if (this.props.source) {
      return (
        <Image
          source={this.props.source}
          style={[imageStyle,{resizeMode:resizeMode}]}
        />
      )
    } else {
      return (emptyView)
    }
  }

  _renderText(fontStyle) {
    if (this.props.children && typeof this.props.children === 'string') {
      return (
        <View>
          <Text style={fontStyle}>{this.props.children}</Text>
        </View>
      )
    } else {
      return (emptyView)
    }

  }

  render() {
    let activeOpacity = 0.5;
    if (this.props.activeStyle || this.props.activeFontColor || this.props.activeImageStyle) {
      activeOpacity = 1;
    }

    let containerStyle = {
      ...this.props.style,
    };

    let fontStyle = {
      ...this.props.fontStyle
    };

    let imageStyle = this._getImageStyle();
    
    if (this.state.active) {
      if (this.props.activeFontColor) {
        fontStyle.color = this.props.activeFontColor;
      }
      if (this.props.activeImageStyle) {
        imageStyle = this.props.activeImageStyle;
      }
      if (this.props.activeStyle) {
        containerStyle = this.props.activeStyle
      }
    }

    return (
      <TouchableOpacity
        {...this.props}
        ref={(ref) => this.touchOpacity = ref}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        activeOpacity={activeOpacity}
        style={[containerStyle,{overflow:'hidden',alignItems: 'center',justifyContent: 'center'}]}
      >
        {this._renderImage(imageStyle)}
        {this._renderText(fontStyle)}
      </TouchableOpacity>
    );
  }

  componentWillUpdate() {
    if (this.props.animated) {
      LayoutAnimation.configureNext(this.animations);
    }
  }

  onPressIn() {
    this.props.onPressIn && this.props.onPressIn();

    this.setState({
      active: true
    });
  }

  onPressOut() {
    this.props.onPressOut && this.props.onPressOut();

    this.setState({
      active: false
    });
  }
}