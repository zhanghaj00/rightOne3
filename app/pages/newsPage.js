/*新闻首页 带 Status bar的的 列表页，从聚合数据中获取新闻数据*/
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import CommonTitleBar from '../comm/CommonTitleBar';
import CommViewPage from '../comm/CommViewPage';
import {COMMON_BACKGROUND_COLOR} from '../comm/Const';
import {PAGETITLEBAR_FLAG} from '../action/types';
import NewsListView from './newsListPage/newsListView';
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
            ref="titleBar"
            title='新闻'
            onLeftButtonClick={this.props.onDrawerOpen}
            isMainPage={true} >
            <CommonTitleBar.TitleBarItem
                tabText="头条"
                selected={this.props.selectPageIndex == 0}
                onTabClick={this._switchTitleBarTab.bind(this, 0)} />
            <CommonTitleBar.TitleBarItem
                tabText="社会"
                selected={this.props.selectPageIndex == 1}
                onTabClick={this._switchTitleBarTab.bind(this, 1)} />
              <CommonTitleBar.TitleBarItem
                  tabText="国内"
                  selected={this.props.selectPageIndex == 2}
                  onTabClick={this._switchTitleBarTab.bind(this, 2)} />
              <CommonTitleBar.TitleBarItem
                  tabText="国际"
                  selected={this.props.selectPageIndex == 3}
                  onTabClick={this._switchTitleBarTab.bind(this, 3)} />
              <CommonTitleBar.TitleBarItem
                  tabText="娱乐"
                  selected={this.props.selectPageIndex == 4}
                  onTabClick={this._switchTitleBarTab.bind(this, 4)} />
              <CommonTitleBar.TitleBarItem
                  tabText="体育"
                  selected={this.props.selectPageIndex == 5}
                  onTabClick={this._switchTitleBarTab.bind(this, 5)} />
          </CommonTitleBar>
           <CommViewPage
               selectedIndex={this.props.selectPageIndex}
               onViewPageScroll={this._onViewPageScroll.bind(this)}
               onSelectedIndexChange={(curPageIndex)=>this._switchTitleBarTab(curPageIndex)}>
               <NewsListView
                   tagName="tag_toutiao"
                   category="top"
                   navigator = {this.props.navigator} />
               <NewsListView
                   tagName="tag_shehui"
                   category="shehui"
                   navigator = {this.props.navigator} />
               <NewsListView
                   tagName="tag_guonei"
                   category="guonei"
                   navigator = {this.props.navigator} />
               <NewsListView
                   tagName="tag_guoji"
                   category="guoji"
                   navigator = {this.props.navigator} />
               <NewsListView
                   tagName="tag_yule"
                   category="yule"
                   navigator = {this.props.navigator} />
               <NewsListView
                   tagName="tag_tiyu"
                   category="tiyu"
                   navigator = {this.props.navigator} />

           </CommViewPage>
        </View>
      );
    }
    _switchTitleBarTab(selIndex){
        if (this.props.selectPageIndex !== selIndex) {
            this.props.dispatch({type:PAGETITLEBAR_FLAG,selectPageIndex:selIndex});
        }
    }

    _onViewPageScroll(offset){
        this.refs.titleBar.onPageScroll(offset);
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COMMON_BACKGROUND_COLOR,
  },
})

function select(store){
    return {
        selectPageIndex:store.pageTitleBarReducer.selectPageIndex,
    }
}

export default connect(select)(NewsPage);
