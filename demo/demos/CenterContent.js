'use strict';

import React, {Component, PropTypes} from 'react';
import {
  Image,
  View,
  Text,
  PixelRatio,
  ScrollView
} from 'react-native';

import {CenterCell} from 'react-native-yui';

let SECTIONS = [
  {
    title: '隐形舒适,美不留痕',
    source: require('../jpg/tampon0.jpg')
  },
  {
    title: '更IN,更美,更轻松',
    source: require('../jpg/tampon1.jpg')
  },
  {
    title: '随心而动,精彩不停',
    source: require('../jpg/tampon2.jpg')
  },
  {
    title: '完美细节,时刻贴心',
    source: require('../jpg/tampon3.jpg')
  },
  {
    title: '定位准,易置入',
    source: require('../jpg/tampon4.jpg')
  },
  {
    title: '丝缎般光滑触感',
    source: require('../jpg/tampon5.jpg')
  },
  {
    title: 'WCM世界级制造标准',
    source: require('../jpg/tampon6.jpg')
  },
  {
    title: '反复打磨细节之处',
    source: require('../jpg/tampon7.jpg')
  },
  {
    title: '选取最优质材料',
    source: require('../jpg/tampon8.jpg')
  },
  {
    title: '配送更快更安心',
    source: require('../jpg/tampon9.jpg')
  }
];

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderCell(data) {
    return (
      <Image
        style={{width:200,height:200}}
        source={data.source}/>
    )
  }

  render() {
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <View
          style={{justifyContent:'center',alignItems:'center',borderWidth:1/PixelRatio.get(),width:300,height:50,alignSelf:'center'}}>
          <Text style={{fontSize:20}}>
            Cell居中放置
          </Text>
        </View>
        <CenterCell
          style={{marginTop:10}}
          contentStyle={{backgroundColor:'#D9D9D9'}}
          space={30}
          data={SECTIONS}
          initialIndex={4}
          renderCell={this.renderCell.bind(this)}
        />

      </View>
    )
  }
}


