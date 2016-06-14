'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
  } from 'react-native';

import {Parallax} from 'react-native-yui';

var IMAGE_WIDTH = Dimensions.get('window').width;
var IMAGE_HEIGHT = IMAGE_WIDTH / 2;
var PIXEL_RATIO = PixelRatio.get();
var PARALLAX_FACTOR = 0.8;

var IMAGE_URI_PREFIX = 'http://loremflickr.com/' + (IMAGE_WIDTH * PIXEL_RATIO) + '/' + Math.round(IMAGE_HEIGHT * (1 + PARALLAX_FACTOR * 2) * PIXEL_RATIO) + '/';

var SECTIONS = [
  {
    title: '(=^ ◡ ^=)',
    keyword: 'cat',
  },
  {
    title: 'ｏ（Ｕ・ω・）⊃',
    keyword: 'dog',
  },
  {
    title: '⊂((・⊥・))⊃',
    keyword: 'monkey',
  },
  {
    title: '（・⊝・）',
    keyword: 'penguin',
  },
  {
    title: '§・ω・§',
    keyword: 'sheep',
  },
  {
    title: '/|\\( ;,;)/|\\',
    keyword: 'bat',
  },
  {
    title: '-o,,o,,o\'',
    keyword: 'ant',
  },
  {
    title: '(*)>\n/ )  \n/"  ',
    keyword: 'bird',
  },
  {
    title: '( )\n:(III)-\n( ) ',
    keyword: 'bee',
  },
  {
    title: 'O_______O\n( ^ ~ ^ )\n(,,)()(,,)\n( )   ( )',
    keyword: 'bear',
  },
];
export default class DemoSection extends Component {
  render() {
    return (
      <Parallax.ScrollView style={styles.scrollView}>
        {SECTIONS.map((section, i) => (
          <Parallax.Image
            key={i}
            style={styles.image}
            overlayStyle={styles.overlay}
            source={{ uri: IMAGE_URI_PREFIX + section.keyword }}
            parallaxFactor={PARALLAX_FACTOR}
            >
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.url}>Source: {IMAGE_URI_PREFIX + section.keyword}</Text>
          </Parallax.Image>
        ))}
      </Parallax.ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  image: {
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
