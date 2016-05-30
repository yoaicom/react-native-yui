'use strict';

import ReactNative, {
  Text,
  TextInput,
  Image,
  Slider,
  ScrollView,
  ListView,
  RefreshControl,
  Modal,
  Navigator,
  DatePicker
} from 'react-native';

var YUI = {
  get Text() {
    return Text;
  },
  get TextInput() {
    return TextInput;
  },
  get TextInput() {
    return TextInput;
  },
  get Image() {
    return Image;
  },
  get LoadingView() {
    //TODO
  },
  get ProgressBar() {
    //TODO
  },
  get Slider() {
    Slider
  },
  get Button() {
    //TODO
  },
  get Switch() {
    //TODO
  },
  get TabBar() {
    //TODO
  },
  get ScrollView() {
    return ScrollView;
  },
  get ListView() {
    return ListView;
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
    return RefreshControl;
  },
  get ExpandControl() {
    //TODO
  },
  get Dialog() {
    return Modal;
  },
  get Navigator() {
    return Navigator;
  },
  get DatePicker() {
    return DatePicker;
  }
}

module.exports = YUI;
