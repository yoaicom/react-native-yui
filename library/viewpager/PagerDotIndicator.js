'use strict';
import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class PagerDotIndicator extends Component {

  static propTypes = {
    ...View.propTypes,
    pageCount: PropTypes.number,
    dotStyle: View.propTypes.style,
    selectedDotStyle: View.propTypes.style,
    selectedPage: PropTypes.number,
  }

  static defaultProps = {
    pageCount: 0,
  }

  state = {
    selectedPage: 0
  }

  render() {
    if(this.props.pageCount <= 0) {
      return null;
    }

    let dots = [];
    for(let i = 0; i < this.props.pageCount; i++) {
      let selected = (i === this.state.selectedPage);
      dots.push(
        <View
          style={[styles.dot, selected ? styles.selectedDot : styles.dot, selected ? this.props.selectedDotStyle : this.props.dotStyle]}
          key={i}
        />
      );
    }

    return (
      <View
        {...this.props}
        style={[styles.container, this.props.style]}
        pointerEvents={'none'}>
        {dots}
      </View>
    );
  }

  onPageSelected(index) {
    this.setState({
      selectedPage: index
    });
  }
}

const DEFAULT_DOT_RADIUS = 8;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: DEFAULT_DOT_RADIUS,
    height: DEFAULT_DOT_RADIUS,
    borderRadius: DEFAULT_DOT_RADIUS >> 1,
    backgroundColor: '#BBBBBB',
    margin: DEFAULT_DOT_RADIUS >> 1
  },
  selectedDot: {
    backgroundColor: 'white',
  }
});