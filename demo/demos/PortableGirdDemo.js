'use strict';

import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableWithoutFeedback,
  PanResponder,
  ScrollView
} from 'react-native';

import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    //this._width = Util.size.width/3;
    this.topIndex = 0;
    this.leftIndex = 0;
    this.index = 0;
    this.finalTopIndex = 0;
    this.finalLeftIndex = 0;
    this.finalIndex = 0;
    this.prev_left = 0;
    this.prev_top = 0;
    this.left = 0;
    this.top = 0;
    this.animations = {
      duration: 300,
      create: {
        //type: LayoutAnimation.Types.linear,
      },
      update: {
        //type: LayoutAnimation.Types.linear,
        springDamping: 0.7,
      },
    };

    this.state = {
      row: props.row,
      selected: 14,
      _width: Util.size.width / this.props.row,
      days: props.data
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return gestureState.dx !== 0 || gestureState.dx !== 0;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        const {pageX, pageY} = evt.nativeEvent;
        //30 to be offset
        this.topIndex = Math.floor((pageY) / this.state._width);
        this.leftIndex = Math.floor((pageX) / this.state._width);
        this.index = this.topIndex * this.state.row + this.leftIndex;
        this.prev_left = this.state._width * this.leftIndex;
        this.prev_top = this.state._width * this.topIndex;
        this.setState({
          selected: this.index,
        });
        let box = this.refs["box" + this.index];
        box.setNativeProps({
          style: {
            opacity: 0.7,
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: {
              height: 0,
              width: 2
            }
          },
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        this.left = this.prev_left + gestureState.dx;
        this.top = this.prev_top + gestureState.dy;
        let box = this.refs["box" + this.index];
        box.setNativeProps({
          style: {top: this.top, left: this.left},
        });
        this._endMove(evt, gestureState)
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => this._release(evt, gestureState),
      onPanResponderTerminate: (evt, gestureState) => this._release(evt, gestureState),
      onShouldBlockNativeResponder: (event, gestureState) => true,
    });
  }

  _endMove(evt, gestureState) {
    this.finalTopIndex = Math.floor(this.top / this.state._width + 0.5);
    this.finalLeftIndex = Math.floor(this.left / this.state._width + 0.5);
    if ((-1 < this.finalTopIndex) && (this.finalTopIndex < Math.ceil(this.props.data.length / this.props.row)) && (-1 < this.finalLeftIndex && this.finalLeftIndex < this.props.row) && (this.finalLeftIndex * this.finalTopIndex <= this.finalIndex )) {
      this.finalIndex = Math.min(this.finalTopIndex * this.props.row + this.finalLeftIndex, this.props.data.length);
      let days = this.state.days;
      let movedBox = days[this.index];
      days.splice(this.index, 1);
      days.splice(this.finalIndex, 0, movedBox);
      this.setState({
        days
      });

      if (this.finalIndex != this.index) {
        this.index = this.finalIndex;
        this.setState({
          selected: this.finalIndex,
        });
      }
      LayoutAnimation.configureNext(this.animations);
    } else {
      let box = this.refs["box" + this.index];
      let top = this.topIndex * this.state._width;
      let left = this.leftIndex * this.state._width;
      LayoutAnimation.configureNext(this.animations);
    }
  }

  _release(evt, gestureState) {
    const shadowStyle = {
      opacity: 1,
      shadowColor: "#000",
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      }
    };
    if ((-1 < this.finalTopIndex) && (this.finalTopIndex < Math.ceil(this.props.data.length / this.props.row)) && ((-1 < this.finalLeftIndex) && this.finalLeftIndex < this.props.row) && (this.finalLeftIndex * this.finalTopIndex <= this.finalIndex )) {
      let box = this.refs["box" + this.finalIndex];
      let top = this.finalTopIndex * this.state._width;
      let left = this.finalLeftIndex * this.state._width;

      console.log("box" + this.finalIndex);
      box.setNativeProps({
        style: {top, left, ...shadowStyle},
      });
      LayoutAnimation.configureNext(this.animations);
    } else {
      console.log(this.topIndex, this.leftIndex);
      let box = this.refs["box" + this.index];
      let top = this.topIndex * this.state._width;
      let left = this.leftIndex * this.state._width;
      box.setNativeProps({
        style: {top, left, ...shadowStyle},
      });
      LayoutAnimation.configureNext(this.animations);
    }
  }

  componentWillUpdate() {
    //LayoutAnimation.spring();
    LayoutAnimation.configureNext(this.animations);
  }


  render() {
    var contents = this.state.days.map((obj, index) => {
      let top = Math.floor(index / this.state.row) * this.state._width;
      let left = Math.floor(index % this.state.row) * this.state._width;
      return (
        <View
          {...this._panResponder.panHandlers}
          ref={"box"+index}
          key={obj.key}
          style={[styles.touchBox,{top,left},{width:this.state._width,height:this.state._width}]}
          underlayColor="red">
          <View style={[styles.boxContainer,{width:this.state._width,height:this.state._width}]}>
            <Text
              style={[styles.boxText,{width:this.state._width,}]}
              onPress={() => {
            this.props.changeRow();
            this.setState({row:this.props.row,_width:Util.size.width/this.props.row})
            }}
            > Demo{index + 1} </Text>
          </View>
        </View>
      )
    });
    return (
      <View
        style={{flex: 1, backgroundColor: 'white'}}>
        {contents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#f3f3f3'
  },
  touchBox: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: Util.pixel,
    borderColor: "#ccc",
  },
  touchBoxContainer: {
    width: Util.size.width,
    marginTop: 30,
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxIcon: {
    position: "relative",
    top: -10
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },
});