'use strict';

import ReactNative from 'react-native';

import Drawer from 'react-native-drawer';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
 
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import ActionButton from 'react-native-action-button';

import Tabs from 'react-native-tabs';

var YUI = {
  get View() {
    return ReactNative.View;
  },
  get Text() {
    return ReactNative.Text;
  },
  get TextInput() {
    return ReactNative.TextInput;
  },
  get Image() {
    return ReactNative.Image;
  },
  get ActivityIndicator() {
    return require('./library/ActivityIndicator').default;
  },
  get ProgressBar() {
    return require('./library/ProgressBar').default;
  },
  get Slider() {
    ReactNative.Slider
  },
  get Button() {
    return require('./library/Button').default;
  },
  get Switch() {
    return ReactNative.Switch;
  },
  get TabBar() {
    return require('./library/tabbar/TabBar').default;
  },
  get ScrollView() {
    return ReactNative.ScrollView;
  },
  get ListView() {
    return ReactNative.ListView;
  },
  get ViewPager() {
    return require('./library/viewpager/ViewPager').default;
  },
  get Picker() {
    return ReactNative.Picker;
  },
  get RefreshControl() {
    return ReactNative.RefreshControl;
  },
  get Alert() {
    return ReactNative.Alert;
  },
  get Modal() {
    return ReactNative.Modal;
  },
  get Navigator() {
    return ReactNative.Navigator;
  },
  get DatePicker() {
    return ReactNative.DatePicker;
  },
	 
	get ScrollableTabView() {return ScrollableTabView; },
	get DefaultTabBar() {return DefaultTabBar; },
	get ScrollableTabBar() {return ScrollableTabBar; },	 
   
  get AutoGrowingTextInput() {return AutoGrowingTextInput; },
   
  get KeyboardAwareScrollView() {return KeyboardAwareScrollView; },
   
  get ParallaxScrollView() {
  	return require('./library/parallaxScroll/index'); 
  },
      
  get Parallax() {
  	return require('./library/react-native-parallax/index'); 
  	},
	 
	get ActionButton() {return ActionButton; },
	 
	get Tabs() {return Tabs; },
}

module.exports = YUI;
