import React, {Component} from 'react';

import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  PixelRatio
} from 'react-native';

import {Button} from 'react-native-yui';

export default class ButtonDemo extends Component {

  render() {
    return (
      <Button
        style={{margin: 10, height: 40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
        fontStyle={{fontSize: 16, color: '#0033FF'}}
        activeBackgroundColor={'#0033FF'}
        activeFontColor={'white'}
        onLongPress={() => {
          console.log('onLongPress...');
        }}
        onPress={() => {
          console.log('onPress...');
        }}
        onPressIn={() => {
          console.log('onPressIn...');
        }}
        onPressOut={() => {
          console.log('onPressOut...');
        }}
      >
        安 装
      </Button>
    );
  }
}