'use strict';

import React, {Component} from 'react';
import {
  TextInput
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-yui';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{flex:1}} getTextInputRefs={() => { return [this._textInputRef,this._textInputRef1];}}>
        <TextInput style={{borderWidth:2,marginTop:400,width:200,height:50,fontSize: 29}} placeholder={'My Input'} ref={(r) => { this._textInputRef = r; }}/>
        <TextInput style={{borderWidth:2,marginTop:50,width:200,height:50,fontSize: 29}} placeholder={'My Input'} ref={(r) => { this._textInputRef1 = r; }}/>
      </KeyboardAwareScrollView>
    );
  }
}