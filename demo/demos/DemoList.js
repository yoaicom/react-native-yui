import React, {
  Component
} from 'react';

import {
  ListView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  PixelRatio
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
});

const dataSource = ds.cloneWithRowsAndSections({
  'Basic Components': [
    {
      name: 'ActivityIndicator',
      desc: '用于显示应用正进行某项任务或正在加载'
    },
    {
      name: 'ProgressBar',
      desc: '用于显示任务进度的进度条'
    },
    {
      name: 'Button',
      desc: '具有高亮变化的按钮'
    },
    {
      name: 'ViewPager',
      desc: '横向轮播页面'
    },
    {
      name: 'TabBar',
      desc: '底部分栏'
    },],
  'Control Components': [
    {
      name: 'RefreshControl',
      desc: 'blablabla'
    }, {
      name: 'ExpandControl',
      desc: 'blablabla'
    }]
});

export default class DemoList extends Component {

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}

        keyboardShouldPersistTaps={true}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
      />
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <View key={rowData.name}>
        <TouchableOpacity
          onPress={() => {
            console.log('onPress...' + rowData.name);
            this.props.onPressRow(rowData.name);
          }}
          >
          <View
            style={{padding: 5, backgroundColor: '#eeeeee'}}>
            <Text style={{fontSize: 14, marginBottom: 5}}>{rowData.name}</Text>

            <Text style={{fontSize: 12, color: '#666'}}>{rowData.desc}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View
        key={sectionID}
        style={{padding: 5, backgroundColor: 'gray'}}>
        <Text
          style={{fontSize: 15, fontWeight: 'bold'}}>
          {sectionID.toUpperCase()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: (Platform.OS === 'ios' ? 20: 0),
  },
  separator: {
    backgroundColor: 'black',
    height: 1 / PixelRatio.get()
  }
});