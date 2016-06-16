'use strict';
import React,{Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  ListView,
  PixelRatio,
  StyleSheet,
  ScrollView
} from 'react-native';

import {ParallaxScrollView} from 'react-native-yui';

const window = Dimensions.get('window');
console.log(window.width);

class Nested extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>

          <ParallaxScrollView
            contentBackgroundColor='white'
            onChangeHeaderVisibility={(b) => {
              if(b) {console.log('脑袋能看到')}
              else{console.log('看不到脑袋了') }
            }}
            style={{position: 'absolute',top: 20,left: 0,right:0,backgroundColor: 'transparent', overflow: 'hidden' }}
            renderBackground={() => <Image style={{backgroundColor: 'transparent'}} source={{ uri: `https://placekitten.com/414/350`, width: window.width, height: 350 }}/>}
            renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
            parallaxHeaderHeight={ 350 }>
            <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
          </ParallaxScrollView>
          <View style={{position: 'absolute',top: 20,left: 0,right:0,height:44,backgroundColor:'transparent'}}>
            <Text style={{left: 75,fontSize: 30,alignSelf:'center',color:'white'}} >这里是头部,可以设置导航栏</Text>
          </View>
        </View>
    );
  }
}

export default class Talks extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
          '有爱是一个只生产品质棉条的公司',
        ])
    };
  }

  render() {
    const { onScroll = (e) => {
      const { nativeEvent: { contentOffset: { y: offsetY } } } = e;
      //console.log('外层Y' + offsetY);
    } } = this.props;
    return (
      <View style = {{flex:1}}>
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData }
            </Text>
          </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
           onChangeHeaderVisibility={(b) => {
              if(b) {console.log('脑袋能看到')}
              else{console.log('看不到脑袋了') }
            }}
            style={{marginTop:0}}
            onScroll={onScroll}
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={0.9}
            backgroundParallaxSpace={100}
            backgroundParallaxScale={1}
            renderBackground={() => (
              <View key="background">
                <Image source={require('../jpg/banner0@2x.png')}
                       style = {{width: window.width,height: PARALLAX_HEADER_HEIGHT}}/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Image style={ [styles.avatar, {width: AVATAR_SIZE,height: AVATAR_SIZE}]}
                       source={require('../jpg/ren@2x.png')}
                />
                <Text style={ styles.sectionSpeakerText }>
                  Yong Ren
                </Text>
                <Text style={ styles.sectionTitleText }>
                  CEO of YOAI
                </Text>
              </View>
            )}
            />
        )}
        />
        <View style={{position: 'absolute',top: 20,left: 0,right:0,height:44,backgroundColor:'transparent'}}>
          <Text style={{fontSize: 20,alignSelf:'center',color:'white'}} >Navigator</Text>
        </View>
      </View>
    );
  }
}

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 400;
const STICKY_HEADER_HEIGHT = 44;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop:150
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});
