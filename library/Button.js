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
    };
  }

  _getRenderStyle(style, targetStyle) {

    let isEmptyObject = true;
    for (let prop in style) {
      isEmptyObject = false;
      break;
    }

    if (!style || isEmptyObject) {
      console.log(2);
      return {
        height: targetStyle.height ? targetStyle.height : height,
        width: targetStyle.width ? targetStyle.width : width
      }
    }
    return style;
  }

  _renderImage(imageStyle) {
    console.log('_renderImage...' + JSON.stringify(imageStyle));
    let resizeMode = this.props.children ? 'contain' : 'cover';
    if (this.props.source) {
      let highLightImage =
        this.state.active ? (<Image
          source={this.props.activeSource}
          style={[imageStyle,{resizeMode:resizeMode}]}
        />) : (emptyView);
      return (
        <View
          style={[imageStyle]}
        >
          <Image
            source={this.props.source}
            style={[{height:imageStyle.height,width:imageStyle.width,resizeMode:'contain',position:'absolute'}]}
          />
          {highLightImage}
        </View>
      );
    }
    else {
      return (emptyView)
    }
  }

  _renderText(fontStyle) {

    if (this.props.text) {

      let _text = this.props.text;

      if (this.props.activeText && this.state.active) {
        _text = this.props.activeText
      }

      return (
        <View>
          <Text style={[fontStyle]}>{_text}</Text>
        </View>
      )
    } else if (this.props.children && typeof this.props.children === 'string') {
      return (
        <View>
          <Text style={[fontStyle]}>{this.props.children}</Text>
        </View>
      )
    } else {
      return (emptyView)
    }
  }

  render() {

    let {active} = this.state;

    let {
      style,
      activeStyle,
      text,
      activeText,
      fontStyle,
      activeFontStyle,
      activeSource,
      imageStyle,
      activeImageStyle,
      type,
      children,
    } = this.props;

    let activeOpacity = 0.5;
    if (activeStyle || activeFontStyle || activeImageStyle || activeText || activeSource) {
      activeOpacity = 1;
    }

    let _containerStyle = {...style};

    let _viewStyle = this._getRenderStyle(undefined, style);

    let _fontStyle = {...fontStyle};

    let _imageStyle = this._getRenderStyle(imageStyle, style);

    let _flexDirectionStyle = {flexDirection: type == 'left' || type == 'right' ? 'row' : 'column'};

    if (active) {
      if (activeFontStyle) {
        _fontStyle = activeFontStyle;
      }
      if (activeImageStyle) {
        _imageStyle = activeImageStyle
      }
      if (activeStyle) {
        _containerStyle = activeStyle
        _viewStyle = this._getRenderStyle(undefined, activeStyle)
        if (!activeImageStyle && !children) {
          _imageStyle = this._getRenderStyle(activeImageStyle, activeStyle);
        }
      }
    }

    let _image = this._renderImage(_imageStyle);

    let front = type == 'left' || type == 'top' ? this._renderText(_fontStyle) : _image;
    let behind = type == 'left' || type == 'top' ? _image : this._renderText(_fontStyle);

    return (
      <TouchableOpacity
        {...this.props}
        ref={(ref) => this.touchOpacity = ref}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        activeOpacity={activeOpacity}
        style={[_containerStyle,{overflow:'hidden'}]}
        onLayout={(event) => {}}
      >
        <View
          style={[_viewStyle,_flexDirectionStyle,{alignItems: 'center',justifyContent: 'center',flex:1}]}
        >
          {front}
          {behind}
        </View>
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
  type: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  text: PropTypes.string,
  activeText: PropTypes.string,
  style: PropTypes.object,
  fontStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  activeFontStyle: PropTypes.object,
  activeImageStyle: PropTypes.object,
  animated: PropTypes.bool,
  animations: PropTypes.object,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func
};

Button.defaultProps = {
  animated: false,
  type: 'bottom',
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