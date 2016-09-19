/*  我的泰国旅行 构思 视频播放，主要是播放数据库已经有的视频。或者直接webview调用优酷的视频页面 也是列表页。
    按照时间排序
*/

import React,{Component} from 'react';

import {View,ListView,StyleSheet,Text} from 'react-native';

class TravelPage extends Component{

    constructor(props){
      super(props);
    }

    render(){
      return(
        <View style={{flex:1}}>
          <ListView
             dataSource={}
             renderRow={this._renderRow.bind(this)}/>
        </View>
      )
    }

    _renderRow(data){
      return(
        <View style={{}}>
          <Image style={{left}}/><View><Text>data.name</Text></View>
        </View>
      )
    }
}
