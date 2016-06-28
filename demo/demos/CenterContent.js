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
  PanResponder,
  Image
} from 'react-native';

import {ParallaxView} from 'react-native-yui';


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

let CELL_SPACE = 30;
let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;
let IMAGE_HEIGHT = WINDOW_WIDTH / 1.5;
let IMAGE_WIDTH = 200;
let PIXEL_RATIO = PixelRatio.get();

export default class DemoSection1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      horizontal: true,
      pagingEnabled: true,
      contentOffsetX: 0,
      lastContentOffsetX: 0,
      endScroll: false,
      currentIndex: 0,
      startMoment: 0,
      endMoment: 0,
      distance: 0,
    }
  }

  onPress() {
    this.scrollToCell(2);
    // this.setState({
    //   horizontal: !this.state.horizontal,
    //   pagingEnabled: !this.state.pagingEnabled
    // })
  }

  componentWillMount() {
    console.log('componentWillMount');
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('开始手势操作');
        let DATE = new Date();
        let startMoment = DATE.getTime();
        this.setState({startMoment: startMoment});
        console.log(this.state.startMoment);
        console.log(this.state.startMoment);
        console.log(this.state.startMoment);
        // console.log(startMoment);
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log(gestureState.dx);
        this.setState({distance: gestureState.dx})
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // let DATE = new Date();
        // let endMoment = DATE.getTime();
        // this.setState({
        //   endScroll: true,
        //   endMoment: endMoment
        // });
        console.log(this.state.startMoment);
        // console.log(this.state.endMoment);
        // endMoment = this.state.endMoment > this.state.startMoment ? this.state.endMoment : this.state.endMoment + 1000;

        // let v = endMoment - this.state.startMoment;
        // console.log('v'+v);

      },
      onPanResponderTerminate: (evt, gestureState) => {
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    });
  }

  getEndScrollX(contentOffsetX) {

    let _contentOffsetX = (WINDOW_WIDTH - IMAGE_WIDTH - CELL_SPACE) / 2;
    let width = CELL_SPACE + IMAGE_WIDTH;
    let index = Math.floor(contentOffsetX / width);
    let lastContentOffsetX = contentOffsetX - index * width;
    let symmetricalContentOffsetX = (width * 2 - WINDOW_WIDTH) / 2;
    index = symmetricalContentOffsetX > lastContentOffsetX ? index : index + 1;
    this.setState({currentIndex: index});
    return index * width - _contentOffsetX;

  }


  scrollToCell(index) {
    let _contentOffsetX = (WINDOW_WIDTH - IMAGE_WIDTH - CELL_SPACE) / 2;
    let width = CELL_SPACE + IMAGE_WIDTH;
    let x = index * width - _contentOffsetX;
    this._scrollView.scrollTo({x: x, y: 0, animated: true})
  }

  handleScroll(event) {
    let {nativeEvent:{contentOffset:{x:contentOffsetX}}} = event;
    this.setState({
      contentOffsetX: contentOffsetX,
      rate: this.state.rate + 1
    });

    // let dX = contentOffsetX - this.state.lastContentOffsetX;
    // if ((dX < 10 && dX > -10 ) && this.state.endScroll == true) {
    //   console.log('---------------------' + this.state.lastContentOffsetX + '---------------------');
    //   let x = this.getEndScrollX(contentOffsetX);
    //   this._scrollView.scrollTo({x: x, y: 0, animated: true});
    //   this.setState({endScroll: false})
    // }

    this.setState({
      lastContentOffsetX: contentOffsetX
    });

  }

  render() {
    let parallaxViewStyle = {
      height: this.state.horizontal ? WINDOW_HEIGHT - 100 : IMAGE_HEIGHT,
      width: IMAGE_WIDTH,
      marginTop: 10,
      marginRight: CELL_SPACE / 2,
      marginLeft: CELL_SPACE / 2
    };

    let content = (
      SECTIONS.map((section, i) =>(
        <Image
          key={i}
          style={{...parallaxViewStyle}}
          source={section.source}
        >
        </Image>
      ))
    );

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View
          style={{marginTop:30,alignSelf:'center',width:150,height:30,borderWidth:PIXEL_RATIO,alignItems:'center',justifyContent:'center'}}>
          <Text onPress={this.onPress.bind(this)}>
            { this.state.horizontal ? '水平方向' : '垂直方向'}
          </Text>
        </View>
        <ScrollView
          {...this._panResponder.panHandlers}
          ref={(ref) => this._scrollView = ref}
          style={{width:WINDOW_WIDTH}}
          scrollEventThrottle={16}
          onScroll={this.handleScroll.bind(this)}
          horizontal={this.state.horizontal}>
          {content}
        </ScrollView>
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
