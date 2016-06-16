'use strict';

import ReactNative from 'react-native';

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
  get ParallaxScrollView() {
  	return require('./library/parallaxScroll/index'); 
  }
}

module.exports = YUI;
