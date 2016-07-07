import React, {Component} from 'react';
import {View, PanResponder, Animated} from 'react-native';


export default class PanTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offSetValue: new Animated.ValueXY(),
      offSetValue1: new Animated.ValueXY()
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y}0 现在会被设置为0
        this.state.offSetValue.setOffset({x: this.state.offSetValue.x._value, y: this.state.offSetValue.y._value});
        this.state.offSetValue.setValue({x: 0, y: 0});

      },
      onPanResponderMove: Animated.event([null, {
        dx: this.state.offSetValue.x,
        dy: this.state.offSetValue.y
      }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.state.offSetValue.flattenOffset();
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });


    this._panResponder1 = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y}0 现在会被设置为0
        this.state.offSetValue1.setOffset({x: this.state.offSetValue1.x._value, y: this.state.offSetValue1.y._value});
        this.state.offSetValue1.setValue({x: 0, y: 0});

      },
      onPanResponderMove: Animated.event([null, {
        dx: this.state.offSetValue1.x,
        dy: this.state.offSetValue1.y
      }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.state.offSetValue1.flattenOffset();
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }

  render() {

    let {offSetValue,offSetValue1} = this.state;

    let [translateX,translateY] = [offSetValue.x, offSetValue.y];

    let scale = offSetValue.x.interpolate({
      inputRange: [-100000,-100,0,100,100000],
      outputRange: [0.8,0.8,1,0.8,0.8]
    });

    let animatedStyle = {transform: [{translateX}, {translateY},{scale}]};

    let [translateX1,translateY1] = [offSetValue1.x, offSetValue1.y];

    let scale1 = offSetValue.x.interpolate({
      inputRange: [-100000,-200,-100,0,100000],
      outputRange: [0.8,0.8,1,0.8,0.8]
    });
    let animatedStyle1 = {transform: [{translateX}, {translateY},{scale:scale1}]};

    // let animatedStyle1 = {transform: [{translateX:translateX1}, {translateY:translateY1},{scale:scale1}]};

    return (
      <View
      style = {{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}
      >
        <View
        style ={{width:200,height:200,backgroundColor:'red',shadowColor:'green',shadowOffset:{width:0,height:0},shadowOpacity:1}}
        />
        <Animated.View
          {...this._panResponder.panHandlers}
          style={{...animatedStyle,width: 100,height:100,backgroundColor:'red'}}
        >

        </Animated.View>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={{...animatedStyle1,width: 100,height:100,backgroundColor:'red'}}
        >

        </Animated.View>
      </View>
    )
  }
}