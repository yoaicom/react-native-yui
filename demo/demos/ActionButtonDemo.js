import React, {Component} from 'react';

import { StyleSheet, View,Text } from 'react-native';
import {ActionButton} from 'react-native-yui';

class Demo extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton
          active={false}
          offsetX={200}
          type = 'tab'
          spacing = {0}
          outRangeScale={1}
          autoInactive={true}
          btnOutRange="rgba(231,220,100,1)"
          //backdrop={<Text style={{marginBottom:200}} >hahahahahhahahah</Text>}
          //position='center'
          buttonColor="rgba(231,76,100,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Text  tyle={styles.actionButtonIcon} >1</Text>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Text style={styles.actionButtonIcon} >2</Text>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Text style={styles.actionButtonIcon} >3</Text>
          </ActionButton.Item>
        </ActionButton>
        <Text>hahhahhahahahahah</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
});

export default Demo