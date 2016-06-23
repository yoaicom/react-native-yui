'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
  Animated,
} from 'react-native';

import {Parallax} from 'react-native-yui';
import {ParallaxView} from 'react-native-yui';
import {ParallaxScrollView} from 'react-native-yui';

var IMAGE_WIDTH = Dimensions.get('window').width;
var IMAGE_HEIGHT = IMAGE_WIDTH / 1.5;
var PIXEL_RATIO = PixelRatio.get();
var PARALLAX_FACTOR = 0.5;

var IMAGE_URI_PREFIX = 'http://loremflickr.com/' + (IMAGE_WIDTH * PIXEL_RATIO) + '/' + Math.round(IMAGE_HEIGHT * (1 + PARALLAX_FACTOR * 2) * PIXEL_RATIO) + '/';

var IMAGE_NAME_PREFIX = '/Users/zhangtian/Desktop/react-native-yui/demo/jpg/tampon';

var SECTIONS = [
  {
    title: '(=^ ◡ ^=)',
    keyword: 'cat',
  },
];
class DemoSection extends Component {
  render() {
    return (
      <Parallax.ScrollView style={styles.scrollView}>
        {SECTIONS.map((section, i) => (
          <Parallax.Image
            key={i}
            style={{height:IMAGE_HEIGHT,width:IMAGE_WIDTH,marginTop:30}}
            overlayStyle={styles.overlay} //浮层Style;
            source={{ uri: IMAGE_NAME_PREFIX + i +'.jpg' }}
            parallaxFactor={PARALLAX_FACTOR} // 背景图片视差效果,越大效果越明显,建议赋值范围 (0,1];
            onPress={() => {console.log('点击了第' + i +'张图片')}}
            >
            <Text style={styles.title}
            >{section.title}</Text>
            <Text style={styles.url}>Source: {IMAGE_NAME_PREFIX + i +'.jpg'}</Text>
          </Parallax.Image>
        ))}
      </Parallax.ScrollView>
    );
  }
};

/**
 * 测试单元Parallax.Image
 * */

export default class DemoSection1 extends Component {

  componentWillMount() {
    var scrollValue = new Animated.Value(0);
    this.setState({ scrollValue });
  }

  onParallaxScroll(event) {
    const { nativeEvent: { contentOffset: { y: offsetY,x: offsetX } } } = event
    this.state.scrollValue.setValue(offsetY);
    // this.state.scrollValue.setValue(offsetX);
  }


  render() {
    return (
      <ScrollView
        onScroll = {(e) => {this.onParallaxScroll(e)}}
        scrollEventThrottle = {16}
        horizontal={false}
        >
        <ParallaxView
          key={1}
          name="2"
          scrollValue = {this.state.scrollValue}
          // style={styles.image}
          style={{height:IMAGE_HEIGHT,
          width:IMAGE_WIDTH,
          marginTop:30}}
          overlayStyle={styles.overlay}
          source={{uri:'/Users/zhangtian/Desktop/react-native-yui/demo/jpg/tampon'+0+'.jpg'}}
          parallaxFactor={PARALLAX_FACTOR}
          >
          <Text style={styles.title}>{'-o,,o,,o\''}</Text>
          <Text style={styles.url}>Source: {IMAGE_URI_PREFIX + 'ant'}</Text>
        </ParallaxView>
        

      </ScrollView>

    );
  }
};

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  },
  image: {
    marginTop:50,
    height: IMAGE_HEIGHT,
  },
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
