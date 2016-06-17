
import React, { Component } from 'react';
import {
  Navigator,
  Platform
} from 'react-native';

import DemoList from './demos/DemoList';
import ActivityIndicatorDemo from './demos/ActivityIndicatorDemo';
import ProgressBarDemo from './demos/ProgressBarDemo';
import ButtonDemo from './demos/ButtonDemo';
import ViewPagerDemo from './demos/ViewPagerDemo';
import TabBarDemo from './demos/TabBarDemo';
import MediaKitDemo from './demos/MediaKitDemo';
import KeyboardAwareScrollViewDemo from './demos/KeyboardAwareScrollViewDemo';


export default class Demo1 extends Component {
  render() {
    return (
      <KeyboardAwareScrollViewDemo/>
    )
  }
}
class Demo extends Component {
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
    if(route.name === 'Button') {
      return <ButtonDemo />
    }
    if(route.name === 'ViewPager') {
      return <ViewPagerDemo />
    }
    if(route.name === 'TabBar') {
      return <TabBarDemo />
    }
    if(route.name === 'MediaKit') {
      return <MediaKitDemo />
    }
    if(route.name === 'KeyboardAwareScrollView') {
      return <KeyboardAwareScrollViewDemo />
    }
  }
}
