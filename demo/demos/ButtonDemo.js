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
      <View>
        <Button
          style={{marginHorizontal:150, height: 40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 50}}
          fontStyle={{fontSize: 16, color: '#0033FF',alignSelf:'center'}}
          imageStyle={{height:50,width:50}}
          activeStyle={{marginHorizontal:20, height: 40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
          // activeFontColor={'blue'}
          // source={require('../jpg/head.jpg')}
          activeImageStyle={{width:80,height:80}}
          animated={true}
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
          安装
        </Button>
        <Button
          style={{marginTop:30, marginHorizontal:165, height: 40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 50}}
          imageStyle={{height:50,width:50}}
          activeStyle={{marginTop:15,marginHorizontal:150, height: 70, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
          source={require('../jpg/head.jpg')}
          activeImageStyle={{width:80,height:80}}
          animated={true}
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

        </Button>
        <Button
          style={{marginTop:30, marginHorizontal:145, height: 80, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 50}}
          imageStyle={{height:50,width:50}}
          activeStyle={{marginTop:20,marginHorizontal:120, height: 100, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
          source={require('../jpg/head.jpg')}
          // activeImageStyle={{width:80,height:80}}
          animated={true}
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
          安装
        </Button>
      </View>
    );
  }
}