import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  View,
  Text
} from 'react-native';

const { bool, func, number, string } = React.PropTypes;

const window = Dimensions.get('window');

const SCROLLVIEW_REF = 'ScrollView';

const pivotPoint = (a, b) => (a - b);

const renderEmpty = () => <View/>;

const IPropTypes = {
  backgroundColor: string,
  backgroundScrollSpeed: number,
  fadeOutForeground: bool,
  fadeOutBackground: bool,
  contentBackgroundColor: string,
  onChangeHeaderVisibility: func,
  parallaxHeaderHeight: number.isRequired,
  renderBackground: func,
  renderForeground: func,
  renderScrollComponent: func,
  stickyHeaderHeight: number,
  backgroundParallaxSpace: number,
  backgroundParallaxScale: number
};

class ParallaxScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      viewHeight: window.height,
      viewWidth: window.width
    };
    this._footerComponent = {
      setNativeProps() {
      }
    }; // Initial stub
    this._footerHeight = 0;
  }

  render() {
    const {
      backgroundColor,
      backgroundScrollSpeed,
      children,
      contentBackgroundColor,
      fadeOutForeground,
      fadeOutBackground,
      parallaxHeaderHeight,
      renderBackground,
      renderForeground,
      renderScrollComponent,
      stickyHeaderHeight,
      backgroundParallaxSpace,
      backgroundParallaxScale,
      style,
      ...scrollViewProps
      } = this.props;

    const background = this._renderBackground({
      fadeOutBackground,
      backgroundScrollSpeed,
      backgroundColor,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderBackground,
      backgroundParallaxSpace,
      backgroundParallaxScale
    });
    const foreground = this._renderForeground({
      fadeOutForeground,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderForeground
    });
    const bodyComponent = this._wrapChildren(children, {contentBackgroundColor, stickyHeaderHeight});
    const footerSpacer = this._renderFooterSpacer({contentBackgroundColor});
    const scrollElement = renderScrollComponent(scrollViewProps);
    return (
      <View style={[style, styles.container]}
            onLayout={(e) => this._maybeUpdateViewDimensions(e)}>
        { background }
        {
          React.cloneElement(scrollElement, {
              ref: SCROLLVIEW_REF,
              style: [styles.scrollView, scrollElement.props.style, {marginTop: -backgroundParallaxSpace}],
              scrollEventThrottle: 16,
              onScroll: this._onScroll.bind(this),
            },
            foreground,
            bodyComponent,
            footerSpacer
          )
        }
      </View>
    );
  }

  _onScroll(e) {
    const {
      parallaxHeaderHeight,
      stickyHeaderHeight,
      onChangeHeaderVisibility,
      backgroundParallaxSpace,
      onScroll: prevOnScroll = () => {
      }
      } = this.props;

    this._maybeUpdateScrollPosition(e);

    let isHeaderVisibility = true;
    const p = pivotPoint(parallaxHeaderHeight, backgroundParallaxSpace);
    if (e.nativeEvent.contentOffset.y >= p - stickyHeaderHeight) {
      isHeaderVisibility = false;
    } else {
      isHeaderVisibility = true;
    }
    onChangeHeaderVisibility(isHeaderVisibility);

    prevOnScroll(e);
  }

  // This optimizes the state update of current scrollY since we don't need to
  // perform any updates when user has scrolled past the pivot point.
  _maybeUpdateScrollPosition(e) {
    const { parallaxHeaderHeight, stickyHeaderHeight } = this.props;
    const { scrollY } = this.state;
    const { nativeEvent: { contentOffset: { y: offsetY } } } = e;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
    if (offsetY <= p || scrollY._value <= p) {
      scrollY.setValue(offsetY);
    }
  }

  _maybeUpdateViewDimensions(e) {
    const { nativeEvent: { layout: { width, height} } } = e;
    if (width !== this.state.viewWidth || height !== this.state.viewHeight) {
      this.setState({
        viewWidth: width,
        viewHeight: height
      });
    }
  }

  _renderBackground({ fadeOutBackground, backgroundScrollSpeed, backgroundColor, parallaxHeaderHeight, stickyHeaderHeight, renderBackground ,backgroundParallaxSpace,backgroundParallaxScale}) {
    const { viewWidth, viewHeight, scrollY } = this.state;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
    return (
      <Animated.View
        style={[styles.backgroundImage, {
            backgroundColor: backgroundColor,
            height: parallaxHeaderHeight,
            width: viewWidth,
            opacity: fadeOutBackground
                     ? scrollY.interpolate({
                      inputRange: [0, p *  (1/2), p * (3/4), p],
                      outputRange: [1, 0.3, 0.1, 0],
                      extrapolate: 'clamp'
                    })
                    : 1,
            transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-p,-backgroundParallaxSpace, p],
                outputRange: [p-backgroundParallaxSpace,0, -(p / backgroundScrollSpeed)],
                extrapolateRight: 'extend',
                extrapolateLeft: 'clamp'
              })
            },
             {
              scale: scrollY.interpolate({
                inputRange: [-viewHeight,-backgroundParallaxSpace,0],
                outputRange: [backgroundParallaxScale,1, 1],
                extrapolate: 'clamp'
              })
            }
            ]
          }]}>
        <View
          >
          { renderBackground() }
        </View>
      </Animated.View>
    );
  }

  _renderForeground({ fadeOutForeground, parallaxHeaderHeight, stickyHeaderHeight, renderForeground }) {
    const { scrollY } = this.state;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
    return (
      <View style={styles.parallaxHeaderContainer}>
        <Animated.View
          style={[styles.parallaxHeader, {
                  height: parallaxHeaderHeight,
                  opacity: fadeOutForeground
                     ? scrollY.interpolate({
                      inputRange: [0, p *  (1/2), p * (3/4), p],
                      outputRange: [1, 0.3, 0.1, 0],
                      extrapolate: 'clamp'
                    })
                    : 1
                }]}>
          <View style={{ height: parallaxHeaderHeight }}>
            {renderForeground()}
          </View>
        </Animated.View>
      </View>
    );
  }

  _wrapChildren(children, { contentBackgroundColor, stickyHeaderHeight }) {
    const { viewHeight } = this.state;
    return (
      <View
        style={{ backgroundColor: contentBackgroundColor }}
        onLayout={e => {
                // Adjust the bottom height so we can scroll the parallax header all the way up.
                const { nativeEvent: { layout: { height } } } = e;
                console.log('layout' + height)
                const footerHeight = Math.max(0, viewHeight - height - stickyHeaderHeight);
                if (this._footerHeight !== footerHeight) {
                  this._footerComponent.setNativeProps({ style: { height: footerHeight }});
                  this._footerHeight = footerHeight;
                }
              }}>
        { children }
      </View>
    );
  }

  _renderFooterSpacer({ contentBackgroundColor }) {
    return (
      <View ref={ref => this._footerComponent = ref } style={{ backgroundColor: contentBackgroundColor }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  parallaxHeaderContainer: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  parallaxHeader: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    top: 0
  },
  stickyHeader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0
  },
  scrollView: {
    backgroundColor: 'transparent',
  }
});

ParallaxScrollView.propTypes = IPropTypes;

ParallaxScrollView.defaultProps = {
  backgroundScrollSpeed: 5,
  backgroundColor: '#000',
  contentBackgroundColor: '#fff',
  fadeOutForeground: true,
  onChangeHeaderVisibility: () => {
  },
  renderScrollComponent: props => <ScrollView {...props}/>,
  renderBackground: renderEmpty,
  renderForeground: renderEmpty,
  stickyHeaderHeight: 0,
  backgroundParallaxSpace: 50,
  backgroundParallaxScale: 5
};


module.exports = ParallaxScrollView;
