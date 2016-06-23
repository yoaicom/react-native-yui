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
import ParallaxViewDemo from './demos/ParallaxViewDemo';
import ParallaxScrollDemo from './demos/ParallaxScrollDemo';
import ScrollableTabView from './demos/ScrollableTabView';
import TabsView from './demos/TabsDemo';
import DrawerDemo from './demos/DrawerDemo';
import TextInputAutoGrowDemo from './demos/TextInputAutoGrowDemo';
import InvertibleScrollView from './demos/InvertibleScrollView';
import KeyboardAwareScrollViewDemo from './demos/KeyboardAwareScrollViewDemo.js';
import ActionButton from './demos/ActionButtonDemo.js';

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
    if (route.name === 'DemoList') {
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
    if (route.name === 'ActivityIndicator') {
      return <ActivityIndicatorDemo />
    }
    if (route.name === 'ProgressBar') {
      return <ProgressBarDemo />
    }
    if (route.name === 'Button') {
      return <ButtonDemo />
    }
    if (route.name === 'ViewPager') {
      return <ViewPagerDemo />
    }
    if (route.name === 'TabBar') {
      return <TabBarDemo />
    }
    if (route.name === 'MediaKit') {
      return <MediaKitDemo />
    }
    if (route.name === 'ParallaxView') {
      return <ParallaxViewDemo />
    }
    if (route.name === 'ParallaxScrollView') {
      return <ParallaxScrollDemo />
    }
    if (route.name === 'ScrollableTabView') {
      return <ScrollableTabView />
    }
    if (route.name === 'TabsView') {
      return <TabsView />
    }
    if (route.name === 'DrawerView') {
      return <DrawerDemo />
    }
    if (route.name === 'KeyboardAwareScrollViewDemo') {
      return <KeyboardAwareScrollViewDemo />
    }
    if (route.name === 'ActionButton') {
      return <ActionButton />
    }
    if (route.name === 'TextInputAutoGrowDemo') {
      return <TextInputAutoGrowDemo />
    }
    if (route.name === 'InvertibleScrollView') {
      return <InvertibleScrollView />
    }
  }
}
