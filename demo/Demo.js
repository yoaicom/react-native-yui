
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


export default class  extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return(
      <ButtonDemo/>
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
  }
}
