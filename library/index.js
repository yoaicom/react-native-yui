'use strict';

import ReactNative from 'react-native';

var YUI = {
  get View() {
    return ReactNative.View;
  },
  get TouchableOpacity() {
    return ReactNative.TouchableOpacity;
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
    return require('./ActivityIndicator').default;
  },
  get ProgressBar() {
    return require('./ProgressBar').default;
  },
  get Slider() {
    ReactNative.Slider
  },
  get Button() {
    return require('./Button').default;
  },
  get Switch() {
    return ReactNative.Switch;
  },
  get TabBar() {
    return require('./tabbar/TabBar').default;
  },
  get ScrollView() {
    return ReactNative.ScrollView;
  },
  get ListView() {
    return ReactNative.ListView;
  },
  get ViewPager() {
    return require('./viewpager/ViewPager').default;
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
  }
}

module.exports = YUI;
