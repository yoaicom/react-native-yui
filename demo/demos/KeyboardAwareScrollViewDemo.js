'use strict';

import React, {Component} from 'react';
import ReactNative,{
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  DeviceEventEmitter,
  StyleSheet,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-yui';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{flex:1 ,backgroundColor: '#EFFDE2'}}
                               keyboardDismissMode = 'interactive'
                               keyboardShouldPersistTaps ={true}
                               getTextInputRefs={() => { return [this._textInputRef,this._textInputRef1,this._textInputRef2,this._textInputRef3,this._textInputRef4,this._textInputRef5];}}>

        <Image style= {[styles.icon]} source = {require('../jpg/head.jpg')} ></Image>
        <View style={[styles.cell,{marginTop:100}]} >
          <Text style={[styles.text]} >姓名</Text>
          <TextInput style={[styles.textInput]} placeholder={'名字'} ref={(r) => { this._textInputRef = r; }}/>
        </View>
        <View style={[styles.cell]} >
          <Text style={[styles.text]} >性别</Text>
          <TextInput style={[styles.textInput]} placeholder={'性别'} ref={(r) => { this._textInputRef1 = r; }}/>
        </View>
        <View style={[styles.cell]} >
          <Text style={[styles.text]} >手机号码</Text>
          <TextInput style={[styles.textInput]} keyboardType = 'numeric' placeholder={'11位手机号'} ref={(r) => { this._textInputRef2 = r; }}/>
        </View>
        <View style={[styles.cell]} >
          <Text style={[styles.text]} >现居住地</Text>
          <TextInput style={[styles.textInput]} placeholder={'城市'} ref={(r) => { this._textInputRef3 = r; }}/>
        </View>
        <View style={[styles.cell]} >
          <Text style={[styles.text]} >邮政编码</Text>
          <TextInput style={[styles.textInput]} keyboardType = 'numeric' placeholder={'邮政编码'} ref={(r) => { this._textInputRef4 = r; }}/>
        </View>
        <View style={[styles.cell]} >
          <Text style={[styles.text]} >详细地址</Text>
          <TextInput style={[styles.textInput]} placeholder={'街道门牌信息'} ref={(r) => { this._textInputRef5 = r; }}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    alignSelf:'center',
    marginTop:30,
    width:150,
    height:150,
    backgroundColor:'white',
    borderRadius:75
  },
  textInput: {
    height:48,
    flex:1,
    fontSize: 18,
  },
  text:{
    marginLeft:10,
    fontSize:18,
    alignSelf:'center',
    width:100
  },
  cell: {
    flexDirection:'row',
    borderBottomWidth:2,
    borderBottomColor:'#B6F67E',
    backgroundColor:'#F7FEF1',
    alignSelf:'center',
    width:375,
    height:50,
  },
});