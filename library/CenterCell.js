'use strict';

import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
} from 'react-native';

let CELL_SPACE = 30;
let DURATION = 200;

export default class CenterContentView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      distance: 0,
      cellWidth: 0,
      cellHeight: 0,
      offsetX: new Animated.Value(0),
      currentIndex: props.initialIndex
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => {
      },
      onShouldBlockNativeResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.offsetX
      }]),
      onPanResponderGrant: (evt, gestureState) => {
        this.state.offsetX.setOffset(this.state.offsetX._value);
        this.state.offsetX.setValue(0);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.state.offsetX.flattenOffset();

        let {vx, dx} = gestureState;
        let _distance = this._getDistance(vx, dx);

        Animated.timing(this.state.offsetX, {
          toValue: _distance,
          duration: DURATION
        }).start(this.handleAnimationStop(_distance));
      }

    });
  }

  handleAnimationStop(distance) {
    this.setState({
      distance: distance
    })
  }

  handleContainerLayout(event) {
    let {nativeEvent: {layout: {x, y, width, height}}} = event;
    this.setState({
      width: width,
      height: height
    })
  }

  handleCellLayout(event) {
    let {nativeEvent: {layout: {x, y, width, height}}} = event;
    let offsetX = (this.state.width - this.props.space - this.state.cellWidth) / 2 - (this.state.cellWidth + this.props.space) * (this.props.initialIndex - 1);

    this.setState({
      cellWidth: width,
      distance: offsetX,
      cellHeight: height
    });
    this.state.offsetX.setValue(offsetX);
  }

  renderCell(cellData, props) {
    let cell = this.props.renderCell(cellData);
    return React.cloneElement(cell, props);
  }

  render() {

    let {offsetX} = this.state;

    let {space, data, style, contentStyle} = this.props;

    let [translateX] = [offsetX];

    let parallaxViewStyle = {
      paddingLeft: space / 2,
      paddingRight: space / 2,
      width: this.state.cellWidth + space
    };

    let animatedStyle = {transform: [{translateX}]};

    let content = (
      data.map((section, i) => {
        return (
          <Animated.View
            key={i}
            style={{...animatedStyle,...contentStyle,...parallaxViewStyle}}
            {...this._panResponder.panHandlers}
          >
            {this.renderCell(section, {
                ref: ( (ref) => this._cell = ref),
                onLayout: (this.handleCellLayout.bind(this))
              }
            )}
          </Animated.View>
        )
      })
    );

    return (
      <View
        ref={(ref) => this._animatedView = ref}
        onLayout={this.handleContainerLayout.bind(this)}
        style={{...style,flexDirection:'row'}}
      >
        {content}
      </View>
    );
  }

  _getDistance(vx, dx) {

    let {data, space} = this.props;

    let {distance, currentIndex, cellWidth} = this.state;

    let _cellWidth = cellWidth + space;

    let coefficient = 0;
    let _distance = vx * DURATION;
    let direction = vx > 0 ? 1 : -1;

    if (vx > -0.1 && vx < 0.1) {
      coefficient = Math.round(dx / (_cellWidth));
    } else if ((vx > -2 && vx < -0.1 ) || (vx > 0.1 && vx < 2)) {
      coefficient = Math.ceil(Math.abs(_distance) / _cellWidth) * direction;
    } else if ((vx > -3 && vx < -2 ) || (vx > 2 && vx < 3)) {
      coefficient = Math.floor(Math.abs(_distance) / _cellWidth) * direction;
    } else {
      coefficient = Math.floor(Math.abs(_distance) * 0.8 / _cellWidth) * direction;
    }

    while (currentIndex - coefficient < 1) {
      coefficient = coefficient - 1;
    }

    while (currentIndex - coefficient > data.length) {
      coefficient = coefficient + 1;
    }

    this.setState({
      currentIndex: currentIndex - coefficient
    });

    _distance = distance + _cellWidth * coefficient;
    return _distance;
  }
}

CenterContentView.PropTypes = {
  data: PropTypes.array,
  space: PropTypes.number,
  renderCell: PropTypes.func,
  initialIndex: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  contentStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ])
};

CenterContentView.defaultProps = {
  initialIndex: 3,
  space: CELL_SPACE
};


