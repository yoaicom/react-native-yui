'use strict';

import React, {Component} from 'react';
import {
    View
} from 'react-native';

import {AutoGrowingTextInput} from 'react-native-yui';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <AutoGrowingTextInput style={{borderWidth:2,width:200,height:50,fontSize: 29}} placeholder={'Your Message'} />
      </View>
    );
  }
}