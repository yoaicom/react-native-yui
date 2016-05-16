'use strict';

import ViewPager from 'react-native-viewpager';

import {GalleryView} from 'react-native-gallery-kit';

import Drawer from 'react-native-drawer';

import Collapsible from './node_modules/react-native-collapsible/Collapsible';
import Accordion from './node_modules/react-native-collapsible/Accordion';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Swipeout from 'react-native-swipeout';

var Yui = {
	 get ViewPager() {return ViewPager;},
	 
	 get GalleryView() {return GalleryView;},
	 
	 get Drawer() {return Drawer; },
	 
	 get Collapsible() {return Collapsible; },
	 get Accordion() {return Accordion; },
	 
	 get ScrollableTabView() {return ScrollableTabView; },
	 get DefaultTabBar() {return DefaultTabBar; },
	 get ScrollableTabBar() {return ScrollableTabBar; },	 
	 
   get Swipeout() {return Swipeout; },
}

module.exports = Yui
