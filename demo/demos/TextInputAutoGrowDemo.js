'use strict';

import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import {TextInput} from 'react-native-yui';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      maxHeight: null,
      isExtendible: true,
      newHeight: 0,
      lastHeight: 0,
      addedHeight: 0
    };
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={{fontSize : 30,marginTop:64}}>欢迎使用</Text>
        <Text style={{fontSize : 20,marginTop:10}}>"ExtendibleTextInput"</Text>
        <Text
          onPress={() => {this.setState({isExtendible:!this.state.isExtendible})}}
          style={{marginTop:20}}>点我切换拉伸模式</Text>
        <Text style={{fontSize: 20}}> {this.state.isExtendible ? '拉伸' : '不可拉伸'} </Text>

        <TextInput
          placeholder={'Writing.....'}
          maxHeight={this.state.maxHeight}
          isExtendible={this.state.isExtendible}
          style={{borderWidth:1,width:200,height:38,fontSize: 29,position:'absolute',top:200,left:87.5}}
          onHeightExtended={(newHeight,lastHeight,addedHeight) => {this.setState({newHeight,lastHeight,addedHeight})
          }}

        />
        <View style={{flexDirection:'row',marginTop:300}}>
          <Text style={{position:'absolute',right:-10 ,fontSize: 15}}>maxHeight : </Text>
          <TextInput style={{position:'absolute',left:10,width:100 ,height:15,fontSize: 15}}
                     placeholder={this.state.maxHeight?this.state.maxHeight:'maxHeight'}
                     onEndEditing={(event) => {this.setState({maxHeight:parseInt(event.nativeEvent.text)})}}/>
        </View>
        <View style={{width:190,backgroundColor:'black',height:1,marginTop:16}}/>
        <View style={{flexDirection:'row'}}>
          <Text style={{position:'absolute',right:-10 ,fontSize: 15}}>NewHeight : </Text>
          <Text style={{position:'absolute',left:10,width:100 ,fontSize: 15}}> {this.state.newHeight} </Text>
        </View>
        <View style={{width:190,backgroundColor:'black',height:1,marginTop:16}}/>
        <View style={{flexDirection:'row'}}>
          <Text style={{position:'absolute',right:-10 ,fontSize: 15}}>LastHeight : </Text>
          <Text style={{position:'absolute',left:10,width:100 ,fontSize: 15}}> {this.state.lastHeight} </Text>
        </View>
        <View style={{width:190,backgroundColor:'black',height:1,marginTop:16}}/>
        <View style={{flexDirection:'row'}}>
          <Text style={{position:'absolute',right:-10 ,fontSize: 15}}>AddedHeight : </Text>
          <Text style={{position:'absolute',left:10,width:100 ,fontSize: 15}}> {this.state.addedHeight} </Text>
        </View>
        <View style={{width:190,backgroundColor:'black',height:1,marginTop:16}}/>


      </View>
    );
  }
}