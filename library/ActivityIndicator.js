import React, {
  Component,
  PropTypes
} from 'react';
import {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} from 'react-native';


export default class ActivityIndicator extends Component {

  render() {
    if(Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS
          {...this.props}
        />
      );
    }

    if(Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          {...this.props}
          styleAttr={(this.props.size === 'large' ? 'Large' : 'Small')}
          indeterminate={true}
        />
      );
    }
  }
}

ActivityIndicator.propTypes = {
  ...View.propTypes,

  /**
   * The foreground color of the spinner
   */
  color: PropTypes.string,

  /**
   * Size of the indicator.
   */
  size: PropTypes.oneOf([
    'small',
    'large',
  ]),

};

