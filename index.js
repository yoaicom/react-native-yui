'use strict';

import ReactNative from 'react-native';

var YUI = {
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
    //TODO
  },
  get ScrollView() {
    return ReactNative.ScrollView;
  },
  get ListView() {
    return ReactNative.ListView;
  },
  get GridView() {
    //TODO
  },
  get Swiper() {
    //TODO
  },
  get Picker() {
    //TODO
  },
  get RefreshControl() {
    return ReactNative.RefreshControl;
  },
  get ExpandControl() {
    //TODO
  },
  get Dialog() {
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
