import React, {
  Component,
  PropTypes
} from 'react';

import {
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
  View
} from 'react-native';


export default class ProgressBar extends Component {

  render() {
    let props = {
      ...this.props
    }

    if (Platform.OS === 'ios') {
      return (
        <ProgressViewIOS
          {...props}
          progressTintColor={this.props.color}
        />
      );
    }

    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          {...props}
          styleAttr={'Horizontal'}
          indeterminate={false}
        />
      );
    }
  }
}

ProgressBar.propTypes = {
  ...View.propTypes,

  /**
   * The progress value (between 0 and 1).
   */
  progress: PropTypes.number,

  /**
   * The color of the progress bar
   */
  color: PropTypes.string,

}
