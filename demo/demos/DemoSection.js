import React, {Component} from 'React';
import {
  View,
  Text,
  PixelRatio
} from 'react-native';

export default class DemoSection extends Component {

  render() {

    let {containerStyle} = this.props;
    
    return (
      <View
        style={[this.props.style, {flexDirection: 'column', margin: 5, borderColor: '#ccc', borderWidth: 1 / PixelRatio.get(), borderRadius: 2}]}>

        <View
          style={{padding: 5, backgroundColor: '#EBF9FF'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>{this.props.title}</Text>
        </View>

        <View
          style={{...containerStyle, paddingHorizontal: 5, paddingVertical: 8}}>
          {this.props.children}
        </View>
      </View>
    );
  }
}