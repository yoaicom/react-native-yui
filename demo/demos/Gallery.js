'use strict';

import React, {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {GalleryView} from 'react-native-yoai-uikit';

//var {GalleryView} = require('react-native-gallery-kit');

var Images = [
  "http://www.tailored-apps.com/wp-content/uploads/2014/01/wien_cropped-350x300.jpg",
  "http://www.tailored-apps.com/wp-content/uploads/2014/01/hannes.jpg",
  "http://ww2.sinaimg.cn/mw690/c4ff9961jw1f2h4szx00zj20yi6qc7wh.jpg",
  "http://ww1.sinaimg.cn/mw690/0065fpvjjw1f28cuhmzrsj30m81edajb.jpg",
  "http://ww1.sinaimg.cn/mw690/0065fpvjjw1f28cuhmzrsj30m81edajb.jpg",
  "http://ww1.sinaimg.cn/mw690/0065fpvjjw1f28cuhmzrsj30m81edajb.jpg",
  "http://ww2.sinaimg.cn/mw690/005XbUcajw1f2h6eqj3ayj30ku11278p.jpg",
  "http://gitlab.yoai.tech/react-native/ReactAppBase/blob/zt-gallery-s/ios/ReactAppBase/Assets.xcassets/errorIMG.imageset/errorIMG.png",
];

export default class Demo extends React.Component {
  render() {
    return (
      <GalleryView
        style={{flex: 1,width: 375, height: 667,backgroundColor: 'black',alignSelf:'center'}}
        images={Images}
        currentIndex={2}
        space = {50}
        galleryMaximumZoomScale = {5}
        galleryMinimumZoomScale = {0.2}
        />
    );
  }
}