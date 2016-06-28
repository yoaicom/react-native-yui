'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
  Animated,
} from 'react-native';

import {ParallaxView} from 'react-native-yui';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;
let IMAGE_HEIGHT = WINDOW_WIDTH / 1.5;
let PIXEL_RATIO = PixelRatio.get();
let PARALLAX_FACTOR = 0.5;

let SECTIONS = [
  {
    title: '隐形舒适,美不留痕',
    source:require('../jpg/tampon0.jpg')
  },
  {
    title: '更IN,更美,更轻松',
    source:require('../jpg/tampon1.jpg')
  },
  {
    title: '随心而动,精彩不停',
    source:require('../jpg/tampon2.jpg')
  },
  {
    title: '完美细节,时刻贴心',
    source:require('../jpg/tampon3.jpg')
  },
  {
    title: '定位准,易置入',
    source:require('../jpg/tampon4.jpg')
  },
  {
    title: '丝缎般光滑触感',
    source:require('../jpg/tampon5.jpg')
  },
  {
    title: 'WCM世界级制造标准',
    source:require('../jpg/tampon6.jpg')
  },
  {
    title: '反复打磨细节之处',
    source:require('../jpg/tampon7.jpg')
  },
  {
    title: '选取最优质材料',
    source:require('../jpg/tampon8.jpg')
  },
  {
    title: '配送更快更安心',
    source:require('../jpg/tampon9.jpg')
  }
];

export default class DemoSection1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      horizontal: false,
      pagingEnabled:false
    }
  }

  onPress() {
    this.setState({
      horizontal:!this.state.horizontal,
      pagingEnabled: !this.state.pagingEnabled
    })
  }

  render() {
    let parallaxViewStyle = {
      height: this.state.horizontal ? WINDOW_HEIGHT - 100 : IMAGE_HEIGHT,
      width: WINDOW_WIDTH,
      marginTop: 10,
      marginRight : this.state.horizontal? 10:0
    };

    let content = (
      SECTIONS.map((section, i) =>(
        <ParallaxView
          key={i}
          style={{...parallaxViewStyle}}
          overlayStyle={styles.overlay}
          source={section.source}
          parallaxFactor={PARALLAX_FACTOR}
        >
          <Text style={styles.title}>{section.title}</Text>
          <Text style={styles.url}>Source: {'www.yoai.com'}</Text>
        </ParallaxView>
      ))
    );

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{marginTop:30,alignSelf:'center',width:150,height:30,borderWidth:PIXEL_RATIO,alignItems:'center',justifyContent:'center'}}>
          <Text onPress={this.onPress.bind(this)}>
            { this.state.horizontal ? '水平方向' : '垂直方向'}
          </Text>
        </View>
        <ParallaxView.ScrollView
          style = {{width:WINDOW_WIDTH + 10}}
          pagingEnabled={this.state.pagingEnabled}
          scrollEventThrottle={16}
          horizontal={this.state.horizontal}>
          {content}
        </ParallaxView.ScrollView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  url: {
    opacity: 0.5,
    fontSize: 10,
    position: 'absolute',
    color: 'white',
    left: 5,
    bottom: 5,
  }
});
