import React, {
  Component,
  PropTypes
} from 'react';

import {
  Platform,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  render() {
    let activeOpacity = 0.5;
    if(this.props.activeBackgroundColor || this.props.activeFontColor) {
      activeOpacity = 1;
    }

    let containerStyle = {
      ...this.props.style,
      alignItems: 'center',
      justifyContent: 'center'
    }
    let fontStyle = {
      ...this.props.fontStyle
    }

    if(this.state.active) {
      if(this.props.activeBackgroundColor) {
        containerStyle.backgroundColor = this.props.activeBackgroundColor;
      }
      if(this.props.activeFontColor) {
        fontStyle.color = this.props.activeFontColor;
      }
    }

    return (
      <TouchableOpacity
        {...this.props}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        activeOpacity={activeOpacity}
        style={containerStyle}>

        <Text style={fontStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
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