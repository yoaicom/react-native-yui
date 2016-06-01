import React, {
  Component
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Image,
  ViewPagerAndroid,
  PixelRatio
} from 'react-native';

import {ViewPager, Button} from 'react-native-yui';

const {width, height} = Dimensions.get('window');

const images = [
  'http://cdn.duitang.com/uploads/item/201112/27/20111227143751_TtLkL.jpg',
  'http://imgsrc.baidu.com/forum/pic/item/89f4051f95cad1c87ccacc6b7e3e6709c83d5147.jpg',
  'http://imgsrc.baidu.com/forum/pic/item/b03533fa828ba61e78ab1c894134970a314e59cb.jpg',
  'http://imgsrc.baidu.com/forum/pic/item/738b4710b912c8fc6f37de54fc039245d7882166.jpg',
  'http://img3.3lian.com/2013/s1/59/d/73.jpg',
  'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1204/20/c6/11323525_1334936199375_3_1024x1024it.jpg',
  'http://img3.3lian.com/2013/s1/59/d/67.jpg'
];

export default class ViewPagerDemo extends Component {

  render() {
    return (
      <View
        style={{flex: 1}}
      >
        <ViewPager
          indicator={(
            <ViewPager.PagerDotIndicator
                  style={{position: 'absolute', bottom: 50, left: 0, right: 0}}
                />
          )}
          scrollEnabled={true}
          initialPage={6}
          onPageSelected={(e) => {
            console.log('onPageSelected...' + JSON.stringify(e.nativeEvent));
          }}
          onPageScroll={(e) => {
            console.log('onPageScroll...' + JSON.stringify(e.nativeEvent));
          }}
          onPageScrollStateChanged={(e) => {
            console.log('onPageScrollStateChanged...' + JSON.stringify(e.nativeEvent));
          }}
          ref='viewPagerRef'
          style={{flex: 1, backgroundColor: 'white'}}>

          {
            images.map((image)=> {
              return (
                <Image
                  key={image}
                  source={{uri: image}}/>
              );
            })
          }

        </ViewPager>


        <Button
          style={{height: 40, borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF'}}
          onPress={(() => {
            this.refs['viewPagerRef'].setPage(1);
          }).bind(this)}>
          Set Page
        </Button>
        <Button
          style={{height: 40, borderWidth: 1 / PixelRatio.get(), borderColor: '#0033FF'}}
          onPress={(() => {
            this.refs['viewPagerRef'].setPageWithoutAnimation(1);
          }).bind(this)}>
          Set Page(No Animation)
        </Button>

      </View>

    );
  }
}