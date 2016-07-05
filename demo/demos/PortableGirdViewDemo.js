'use strict';

import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';

import PortableView from './PortableGirdDemo.js';

var days = [{
  key: 0,
  title: "A stopwatch",
  isFA: false,
  icon: "ios-stopwatch",
  size: 48,
  color: "#ff856c",
  hideNav: false,
}, {
  key: 1,
  title: "A weather app",
  isFA: false,
  icon: "ios-baseball",
  size: 60,
  color: "#90bdc1",
  hideNav: true,
}, {
  key: 2,
  title: "twitter",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#2aa2ef",
  hideNav: true,
}, {key: 3, title: "cocoapods", isFA: true, icon: "contao", size: 50, color: "#FF9A05", hideNav: false,}, {
  key: 4,
  title: "find my location",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#00D204",
  hideNav: false,
}, {key: 5, title: "Spotify", isFA: true, icon: "spotify", size: 50, color: "#777", hideNav: true,}, {
  key: 6,
  title: "Moveable Circle",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#5e2a06",
  hideNav: true,
}, {
  key: 7,
  title: "Swipe Left Menu",
  isFA: true,
  icon: "google",
  size: 50,
  color: "#4285f4",
  hideNav: true,
}, {
  key: 8,
  title: "Twitter Parallax View",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#2aa2ef",
  hideNav: true,
}, {
  key: 9,
  title: "Tumblr Menu",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#37465c",
  hideNav: true,
}, {
  key: 10,
  title: "OpenGL",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#2F3600",
  hideNav: false,
}, {
  key: 11,
  title: "charts",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#fd8f9d",
  hideNav: false,
}, {
  key: 12,
  title: "tweet",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#83709d",
  hideNav: true,
}, {
  key: 13,
  title: "tinder",
  isFA: false,
  icon: "ios-baseball",
  size: 50,
  color: "#ff6b6b",
  hideNav: true,
}, {
  key: 14,
  title: "Time picker",
  isFA: false,
  icon: "ios-calendar-outline",
  size: 50,
  color: "#ec240e",
  hideNav: false,
}]

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row: 3
    };
  }

  render() {
    return (
      <PortableView
        data={days}
        row={this.state.row}
        changeRow={() => {
        this.setState({row:this.state.row <4? this.state.row+1 : 2})
        }}
      >
      </PortableView>
    );
  }
}