import React, {Component, PropTypes} from 'react';

const {number, func, bool} = PropTypes;

import {View, TextInput} from 'react-native';

export default class ExtendibleTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }

  _onChange(nativeEvent) {
    let newHeight = this.state.height;
    if (nativeEvent.contentSize && this.props.isExtendible) {
      newHeight = nativeEvent.contentSize.height;
      if(this.props.maxHeight) {
        if (this.state.height !== newHeight &&newHeight <= this.props.maxHeight&& this.props.onHeightExtended) {
          this.props.onHeightExtended(newHeight, this.state.height, newHeight - this.state.height);
        }
      } else {
        if (this.state.height !== newHeight && this.props.onHeightExtended) {
          this.props.onHeightExtended(newHeight, this.state.height, newHeight - this.state.height);
        }
      }

    }
    this.setState({
      height: newHeight
    });
  }

  _getChangeHeight(height) {
    if (this.props.maxHeight == null) {
      return (height)
    }
    return Math.min(height, this.props.maxHeight);

  }

  render() {
    return (
      <TextInput {...this.props} {...this.style}
        multiline={true}
        style={[this.props.style,{height:Math.max(this._getChangeHeight(this.state.height),this.props.style.height)}]}
        onChange={(event) => {this._onChange(event.nativeEvent)}}
      />

    )
  }
}

ExtendibleTextInput.propTypes = {
  maxHeight: number,
  onHeightExtended: func,
  isExtendible: bool
};
ExtendibleTextInput.defaultProps = {
  maxHeight: null,
  isExtendible: false
};