/*新闻首页 带 Status bar的的 列表页，从聚合数据中获取新闻数据*/
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import CommonTitleBar from '../comm/CommonTitleBar';
import CommonSecondTitleBar from '../comm/CommonSecondTitleBar';
import {COMMON_BACKGROUND_COLOR} from '../comm/Const';


class NewsPage extends Component{

    constructor(props){
      super(props);
    }
//  onLeftButtonClick={this.props.onDrawerOpen}
//  selected={this.props.selectedTabIndex == 0}
    render(){
      return(
        <View style={styles.container}>
          <CommonTitleBar
            title='新闻'
            onLeftButtonClick={this.props.onDrawerOpen}
            isMainPage={true} >
            <CommonSecondTitleBar
            tabText="头条"
            onTabClick={this._switchTitleBarTab.bind(this, 0)} />
          </CommonTitleBar>
            <View >
              <Text> 新闻主页 测试抽屉</Text>
            </View>

        </View>
      );
    }
    _switchTitleBarTab(tabIndex){
      //TODO 切换tab页
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COMMON_BACKGROUND_COLOR,
  },
})


export default NewsPage;
