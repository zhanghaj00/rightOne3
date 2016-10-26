/*  我的泰国旅行 构思 视频播放，主要是播放数据库已经有的视频。或者直接webview调用优酷的视频页面 也是列表页。
    按照时间排序
*/

import React,{Component} from 'react';

import {View,ListView,StyleSheet,Text} from 'react-native';
import CommonTitleBar from '../comm/CommonTitleBar';
import LoginView from './loginPage';


import {_getLoginUser} from '../store/localStore';
import {getLoginUser} from '../db/operation/userLoginHelper';

class TravelPage extends Component{

    constructor(props){
      super(props);
    }

    render(){
      return(
        <View style={{flex:1}}>
                <Text>hello1</Text>
        </View>
      )
    }

    componentWillReceiveProps() {
        console.log(getLoginUser());
        if (!getLoginUser()) {
            this.props.navigator.push({
                component: LoginView,
            });
        }
    }


    _renderRow(data){
      return(

        <View style={{}}>
            <CommonTitleBar
                ref="travelBar"
                title='旅行'
                onLeftButtonClick={this.props.onDrawerOpen}
                isMainPage={true}/>
            <Image style={{left}}/><View><Text>data.name</Text></View>
        </View>
      )
    }


}

export default TravelPage
