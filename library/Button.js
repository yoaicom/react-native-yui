import React, {
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Dimensions,
  Platform,
  UIManager
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const {width, height} = Dimensions.get('window');
const emptyView = <View/>;

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      shouldCover: false,
    };
  }

  _getRenderStyle(style, targetStyle) {

    let isEmptyObject = true;
    for (let prop in style) {
      isEmptyObject = false;
      break;
    }

    if (style && !isEmptyObject) {
      return style
    }
    else if (!style) {
      return {
        height: targetStyle.height ? targetStyle.height : height,
        width: targetStyle.width ? targetStyle.width : width
      }
    }
    else {
      return {
        height: style.height ? targetStyle.height : height,
        width: style.width ? targetStyle.width : width
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
      ...this.props.style
    };

    let fontStyle = {
      ...this.props.fontStyle
    };

    let imageStyle = this._getRenderStyle(this.props.imageStyle, this.props.style);

    let idDisabled = this.props.disabled ? {backgroundColor: '#DDDFDE'} : {};

    if (this.state.active) {
      if (this.props.activeFontColor) {
        fontStyle.color = this.props.activeFontColor;
      }
      if (this.props.activeImageStyle) {
        imageStyle = this.props.activeImageStyle
      }
      if (this.props.activeStyle) {
        containerStyle = this.props.activeStyle
        if (!this.props.activeImageStyle && !this.props.children) {
          imageStyle = this._getRenderStyle(this.props.activeImageStyle, this.props.activeStyle);
        }
      }
    }

    return (
      <TouchableOpacity
        {...this.props}
        ref={(ref) => this.touchOpacity = ref}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        activeOpacity={activeOpacity}
        style={[containerStyle,idDisabled,{overflow:'hidden',alignItems: 'center',justifyContent: 'center'}]}
        onLayout={(event) => {}}
      >
        {this._renderImage(imageStyle)}
        {this._renderText(fontStyle)}
      </TouchableOpacity>
    );
  }

  componentWillUpdate() {
    if (this.props.animated) {
      LayoutAnimation.configureNext(this.props.animations);
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

Button.propTypes = {
  style: PropTypes.object,
  fontStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  activeFontColor: PropTypes.string,
  activeImageStyle: PropTypes.object,
  animated: PropTypes.bool,
  animations: PropTypes.object,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func
};

Button.defaultProps = {
  animated: true,
  imageStyle: {},
  animations: {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    }
  }
};