import React, {
  Component
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

import {ActivityIndicator} from 'react-native-yui';

import DemoSection from './DemoSection';

export default class ActivityIndicatorDemo extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        <DemoSection
          title={'Default(small)'}>
          <ActivityIndicator />
        </DemoSection>


        <DemoSection
          style={{flex: 1}}
          title={'Custom colors'}>
          <View
            style={{flexDirection: 'row'}}>
            <ActivityIndicator
              style={{flex: 1}}
              color={'#0000ff'}
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#aa00aa'}
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#aa3300'}
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#00aa00'}
            />
          </View>
        </DemoSection>

        <DemoSection
          style={{flex: 1}}
          title={'Large'}>
          <ActivityIndicator
            style={{flex: 1}}
            size='large'
          />
        </DemoSection>

        <DemoSection
          style={{flex: 1}}
          title={'Large, custom colors'}>
          <View
            style={{flexDirection: 'row'}}>
            <ActivityIndicator
              style={{flex: 1}}
              color={'#0000ff'}
              size='large'
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#aa00aa'}
              size='large'
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#aa3300'}
              size='large'
            />
            <ActivityIndicator
              style={{flex: 1}}
              color={'#00aa00'}
              size='large'
            />
          </View>
        </DemoSection>
      </ScrollView>
    );
  }
}