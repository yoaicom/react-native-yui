import React, {Component} from 'react';

import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  PixelRatio,
  LayoutAnimation,
  ScrollView,
  StyleSheet
} from 'react-native';

import {Button} from 'react-native-yui';
import DemoSection from './DemoSection';

export default class ButtonDemo extends Component {

  render() {
    var animations = {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };

    return (
      <ScrollView style={{backgroundColor:'white',flex:1}}>
        <DemoSection
          title='文本Button'
          style={{flex:1,flexDirection:'row'}}
        >
          <Button
            style={{height: 40,width:100,alignSelf:'center',backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 50}}
            fontStyle={{fontSize: 16, color: '#0033FF',alignSelf:'center',fontWeight:'600',letterSpacing:0,lineHeight:0}}
            activeStyle={{height: 40,width:150, alignSelf:'center',backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            activeFontStyle={{fontSize: 16, color: '#0033FF',alignSelf:'center',fontWeight:'600',letterSpacing:0,lineHeight:0}}
            text='改变文本'
            activeText='文本改变'
            animated={true}
            animations={animations}
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
            style={{marginLeft:30, height: 40,width:100,alignSelf:'center',backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 50}}
            fontStyle={{fontSize: 16, color: '#0033FF',alignSelf:'center',fontWeight:'600',letterSpacing:0,lineHeight:0}}
            activeStyle={{marginLeft:30, height: 40,width:150, alignSelf:'center',backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            activeFontStyle={{fontSize: 16, color: 'red',alignSelf:'center',fontWeight:'900',letterSpacing:0,lineHeight:0}}
            text='改变字体'
            activeText='改变字体'
            animated={true}
            animations={animations}
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
        </DemoSection>
        <DemoSection
          title='图像Button'
          style={{flex:1,flexDirection:'row',justifyContent:'center'}}
        >
          <Button
            style={{marginTop:10,alignSelf:'center',height: 40,width:40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 20}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginTop:0,alignSelf:'center',height: 60,width:60, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            activeImageStyle={{width:200,height:200}}
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
            style={{marginLeft:20,marginTop:10,alignSelf:'center',height: 40,width:40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 20}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginLeft:20,marginTop:0,alignSelf:'center',height: 60,width:60, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
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
            style={{marginLeft:20,marginTop:10,alignSelf:'center',height: 40,width:40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 20}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginLeft:20,marginTop:0,alignSelf:'center',height: 60,width:60, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            activeImageStyle={{width:50,height:50}}
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
            style={{marginLeft:20,marginTop:10,alignSelf:'center',height: 40,width:40, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 20}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginLeft:20,marginTop:0,alignSelf:'center',height: 60,width:60, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            activeSource={require('../jpg/headHighLight.jpg')}
            activeImageStyle={{width:50,height:50}}
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
        </DemoSection>
        <DemoSection
          title='图文Button'
          style={{flex:1,flexDirection:'row',justifyContent:'center'}}
        >
          <Button
            style={{marginTop:10,alignSelf:'center', height: 55,width:80, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginTop:10,alignSelf:'center',height: 55,width:100, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            animated={true}
            type="left"
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
            左⬅️
          </Button>
          <Button
            style={{marginLeft:10,marginTop:10,alignSelf:'center', height: 65,width:55, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginLeft:10,marginTop:0,alignSelf:'center',height: 85,width:55, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            animated={true}
            type="top"
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
            上⬆️
          </Button>
          <Button
            style={{marginLeft:10,marginTop:10,alignSelf:'center', height: 65,width:55, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            imageStyle={{height:50,width:50}}
            activeStyle={{marginLeft:10,marginTop:0,alignSelf:'center',height: 85,width:55, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            source={require('../jpg/head.jpg')}
            animated={true}
            type="bottom"
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
            下⬇
          </Button>
          <Button
            style={{marginLeft:10,marginTop:10,alignSelf:'center', height: 55,width:80, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            imageStyle={{height:50,width:50}}
            source={require('../jpg/head.jpg')}
            activeImageStyle={{width:50,height:50}}
            activeStyle={{marginLeft:10,marginTop:10,alignSelf:'center',height: 55,width:100, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            animated={true}
            type="right"
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
            ️右➡️
          </Button>

        </DemoSection>
        <DemoSection
          title='DisableButton'
          style={{flex:1}}
        >
          <Button
            style={{marginTop:10,alignSelf:'center', height: 70,width:70, backgroundColor: 'white', borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF', borderRadius: 5}}
            imageStyle={{height:50,width:50}}
            source={require('../jpg/head.jpg')}
            animated={true}
            disabled={true}
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
            Disabled
          </Button>
        </DemoSection>
      </ScrollView>
    );
  }
}
