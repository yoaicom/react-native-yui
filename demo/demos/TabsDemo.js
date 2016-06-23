'use strict';

import React,{Component} from 'react';

import {
  StyleSheet,
  Text,
  View} from 'react-native';

import {Tabs} from 'react-native-yui';

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
          <Text name="first">First</Text>
          <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
          <Text name="third"  selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Third</Text>
          <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
          <View name="fifth"
            selectedStyle={{backgroundColor:'green'}}
            >
            <Text
              selectedStyle={{color:'green'}}
              >Tsst</Text>
          </View>
        </Tabs>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.page}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});