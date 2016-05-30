
import React, { Component } from 'react';
import {
  Navigator,
  Platform
} from 'react-native';

import DemoList from './demos/DemoList';
import ActivityIndicatorDemo from './demos/ActivityIndicatorDemo';
import ProgressBarDemo from './demos/ProgressBarDemo';


export default class Demo extends Component {
  render() {
    return (
      <Navigator
        style={{marginTop: (Platform.OS === 'ios' ? 20 : 0)}}
        initialRoute={{name: 'DemoList'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'DemoList') {
      return (
        <DemoList
          onPressRow={(name) => {
            navigator.push({
              name: name
            })
          }}
          navigator={navigator}/>
      );
    }
    if(route.name === 'ActivityIndicator') {
      return <ActivityIndicatorDemo />
    }
    if(route.name === 'ProgressBar') {
      return <ProgressBarDemo />
    }
  }
}
