'use strict';

import ViewPager from 'react-native-viewpager';

import {GalleryView} from 'react-native-gallery-kit';

import Drawer from 'react-native-drawer';

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Swipeout from 'react-native-swipeout';

import GesturePassword from 'react-native-gesture-password'

import SwipeCards from 'react-native-swipe-cards';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import Toast from 'react-native-root-toast';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Parallax from 'react-native-parallax';

import ActionButton from 'react-native-action-button';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop,
} from 'react-native-svg';

import Button from 'apsl-react-native-button';

import InvertibleScrollView from 'react-native-invertible-scroll-view';

import Tabs from 'react-native-tabs';

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
   
   get GesturePassword() {return GesturePassword; },
  
   get SwipeCards() {return SwipeCards; },
   
   get AutoGrowingTextInput() {return AutoGrowingTextInput; },
   
   get KeyboardAwareScrollView() {return KeyboardAwareScrollView; },
   
   get Toast() {return Toast; },
   
   get ParallaxScrollView() {return ParallaxScrollView; },
      
   get Parallax() {return Parallax; },
   
   //绘图 有native代码 需要rnpm link执行 
   get Svg() {return Svg; },
   get Circle() {return Circle; },
   get Ellipse() {return Ellipse; },
   get G() {return G; },
   get LinearGradient() {return LinearGradient; },
   get RadialGradient() {return RadialGradient; },
   get Line() {return Line; },
   get Path() {return Path; },
   get Polygon() {return Polygon; },
   get Polyline() {return Polyline; },
   get Rect() {return Rect; },
   get Symbol() {return Symbol; },
   get Text() {return Text; },
   get Use() {return Use; },
   get Defs() {return Defs; },
   get Stop() {return Stop; },
   
   get Button() {return Button; },

	 get InvertibleScrollView() {return InvertibleScrollView; },
	 
	 get ActionButton() {return ActionButton; },
	 
	 get Tabs() {return Tabs; },

}

module.exports = Yui
