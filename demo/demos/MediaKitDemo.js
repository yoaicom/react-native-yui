import React, {
  Component, PropTypes
} from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Slider
} from 'react-native';

import {TabBar, Button} from 'react-native-yui';

import {Video, Audio} from 'react-native-media-kit';

const uri1 = 'http://192.168.100.18:3000/videos/Sarajevo%20in%204K.mp4';
const uri2 = 'http://192.168.100.18:3000/videos/%E5%8D%83%E6%9C%AC%E6%A1%9C%20%E3%82%BD%E3%83%AD%E3%82%AD%E3%82%99%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%AA%E3%82%B7%E3%82%99%E3%83%8A%E3%83%AB%E3%82%A2%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99%20-%20KOYUKI.mp4';
const uri3 = 'http://192.168.100.18:3000/videos/Game%20of%20Thrones%20Season%206%20Episode%206%20Clip%20%E2%80%93%20Are%20You%20With%20Me%20(HBO).mp4';
const uri4 = 'http://192.168.100.18:3000/audios/Andy%20McKee%20-%20Rylynn.mp3';
//const uri = 'http://v.yoai.com/femme_tampon_tutorial.mp4';
const uri = 'https://raw.githubusercontent.com/yoaicom/react-native-demo/res/res/Game%20of%20Thrones%20Season%206%20Episode%206%20Clip%20%E2%80%93%20Are%20You%20With%20Me%20(HBO).mp4';
const {width, height} = Dimensions.get('window');

export default class MediaKitDemo extends Component {

  state = {
    src: uri,
    autoplay: false,
    preload: 'none',
    //preload: 'metadata',
    //preload: 'auto',
    loop: false
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'gray'}}>
        <Video
          style={{width: width, height: width / (16/9)}}
          {...this.state}
          controls={true}
        />

        <Button
          onPress={(() => this.setState({autoplay: true})).bind(this)}
          style={{height: 44}}
        >
          Change autoplay
        </Button>
        <Button
          onPress={(() => this.setState({ preload: 'auto'})).bind(this)}
          style={{height: 44}}
        >
          Change preload
        </Button>
        <Button
          onPress={(() => this.setState({loop: true})).bind(this)}
          style={{height: 44}}
        >
          Change loop
        </Button>

        <Slider
          onSlidingComplete={(value) => {

            }}
          onValueChange={(value) => {

            }}
          maximumValue={100}
          minimumValue={0}
          value={0}
          maximumTrackTintColor={'#a1a1a1'}
          minimumTrackTintColor={'white'}
          trackStyle={{height: 2, borderRadius: 1}}
          thumbStyle={{width: 10, height: 10}}
          thumbTintColor={'white'}
          style={{flex: 1, marginHorizontal: 5}}/>

      </ScrollView>
    );
  }


}
