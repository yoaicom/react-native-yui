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
      source: props.source,
      isActiveImage: false
    };
  }

  _getRenderStyle(style, targetStyle) {

    let isEmptyObject = true;
    for (let prop in style) {
      isEmptyObject = false;
      break;
    }

    if (!style || isEmptyObject) {
      return {
        height: targetStyle.height ? targetStyle.height : height,
        width: targetStyle.width ? targetStyle.width : width
      }
    }
    return style;
  }

  _renderImage(imageStyle) {

    let {resizeMode, ..._imageStyle} = imageStyle;
    if (!resizeMode) {
      resizeMode = this.props.text ? 'contain' : 'cover';
    }

    if (this.props.source) {
      return (
        <View
          style={{..._imageStyle}}
        >
          <Image
            source={this.state.source}
            style={[{height:imageStyle.height,width:imageStyle.width,resizeMode:resizeMode,position:'absolute'}]}
          />
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

    let _contentViewSize = this._getRenderStyle({}, style);

    let _fontStyle = {...fontStyle};

    let _imageStyle = this._getRenderStyle(imageStyle, style);

    if (active) {

      if (activeFontStyle) {
        _fontStyle = activeFontStyle;
      }
      if (activeImageStyle) {
        _imageStyle = activeImageStyle
      }
      if (activeStyle) {
        _containerStyle = activeStyle;
        _contentViewSize = this._getRenderStyle({}, activeStyle);
        if (!activeImageStyle && !text && !children) {
          _imageStyle = this._getRenderStyle(activeImageStyle, activeStyle);
        }
      }
    }

    let _image = this._renderImage(_imageStyle);
    let _text = this._renderText(_fontStyle);

    let front = type == 'iconLeft' || type == 'iconTop'
      ? _text
      : _image;
    let behind = type == 'iconLeft' || type == 'iconTop'
      ? _image
      : _text;

    let _contentViewLayoutStyle = {
      flex:1,
      flexDirection: type == 'iconLeft' || type == 'iconRight' ? 'row' : 'column',
      justifyContent: _containerStyle.justifyContent ? _containerStyle.justifyContent : 'center',
      alignItems: _containerStyle.alignItems ? _containerStyle.alignItems : 'center',
    };

    return (
      <TouchableOpacity
        {...this.props}
        ref={(ref) => this.touchOpacity = ref}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        activeOpacity={activeOpacity}
        style={{..._containerStyle,overflow:'hidden'}}
        onLayout={(event) => {}}
      >
        <View
          style={{..._contentViewSize,..._contentViewLayoutStyle}}
        >
          {front}
          {behind}
          {children}
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
    if (this.props.activeSource) {
      this.setState({
        isActiveImage:true,
        source:this.props.activeSource
      });
      this.forceUpdate();
    }
  }

  onPressOut() {
    this.props.onPressOut && this.props.onPressOut();

    this.setState({
      active: false
    });
    if(this.state.isActiveImage) {
      this.setState({
        isActiveImage:false,
        source:this.props.source
      });
      this.forceUpdate();
    }
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['iconLeft', 'iconRight', 'iconTop', 'iconBottom']),
  text: PropTypes.string,
  fontStyle: PropTypes.object,
  activeText: PropTypes.string,
  activeFontStyle: PropTypes.object,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  activeImageStyle: PropTypes.object,
  animated: PropTypes.bool,
  animations: PropTypes.object,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ]),
  activeSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ])
};

Button.defaultProps = {
  animated: false,
  type: 'iconBottom',
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
}