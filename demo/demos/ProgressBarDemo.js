import React, {
  Component
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

import {ProgressBar} from 'react-native-yui';

import DemoSection from './DemoSection';

export default class ProgressBarDemo extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        <DemoSection
          title={'Default'}>
          <ProgressBar />
        </DemoSection>

        <DemoSection
          title={'50%'}>
          <ProgressBar
            progress={0.5}
          />
        </DemoSection>

        <DemoSection
          title={'custom color'}>
          <ProgressBar
            progress={0.8}
            color={'#84D55F'}
          />
        </DemoSection>

      </ScrollView>
    );
  }
}