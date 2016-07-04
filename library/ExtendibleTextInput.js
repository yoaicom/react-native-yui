import React, {Component, PropTypes} from 'react';

const {number, func, bool,string} = PropTypes;

import {TextInput} from 'react-native';

export default class ExtendibleTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }

  _onChange(nativeEvent) {
    if(this.props.onChange) {
      this.props.onChange();
    }
    let newHeight = this.state.height;
    if (nativeEvent.contentSize && this.props.isExtendible) {
      newHeight = nativeEvent.contentSize.height;
      if (this.props.maxHeight) {
        if (this.state.height !== newHeight && newHeight <= this.props.maxHeight && this.props.onHeightExtended) {
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
        //onLayout方法不执行,无法再挂载阶段获取容器的行高
        // onLayout={() => {console.log('---------------------------------onLayout');}}
        style={[this.props.style,{height:Math.max(this._getChangeHeight(this.state.height),this.props.style.height)}]}
        onChange={(event) => {this._onChange(event.nativeEvent)}}
      />

    )
  }
}

ExtendibleTextInput.propTypes = {
  maxHeight: string,
  onHeightExtended: func,
  isExtendible: bool
};
ExtendibleTextInput.defaultProps = {
  maxHeight: null,
  isExtendible: false
};