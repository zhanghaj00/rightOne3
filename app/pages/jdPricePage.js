/**
 * Created by zhanghao on 2016/11/11.
 */
/*新闻首页 带 Status bar的的 列表页，从聚合数据中获取新闻数据*/
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import CommonTitleBar from '../comm/CommonTitleBar';
import JdPriceListView from './newsListPage/jdPriceListView';
import NewJdPriceInputModal from './newsListPage/newJdPriceInput'
import {COMMON_BACKGROUND_COLOR} from '../comm/Const';

class JdPricePage extends Component{

    constructor(props){
        super(props);
        this.state ={
            show:false,
        }
        this.onRightBtnClick = this._onRightBtnClick.bind(this);

    }
//  onLeftButtonClick={this.props.onDrawerOpen}
//  selected={this.props.selectedTabIndex == 0}
    render(){
        return(
            <View style={styles.container}>
                <CommonTitleBar
                    ref="titleBar"
                    title='我的商品'
                    onLeftButtonClick={this.props.onDrawerOpen}
                    rightText="点我"
                    onRightBtnClick={this.onRightBtnClick}
                    isMainPage={true} >
                </CommonTitleBar>
                <JdPriceListView
                    navigator = {this.props.navigator} />
                <NewJdPriceInputModal
                    ref="newJdPrice"
                    style = {styles.showInputView}
                    show = {this.state.show}
                />
            </View>
        );
    }

    _onRightBtnClick(){
        this._setModalVisible();
    }
    // 显示/隐藏 modal
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show:!isShow,
        });
        this.refs.newJdPrice.showMsh();
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COMMON_BACKGROUND_COLOR,
    },
    showInputView:{
        //padding:80,
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    }
})

function select(store){
    return {
        selectPageIndex:store.pageTitleBarReducer.selectPageIndex,
    }
}

export default connect(select)(JdPricePage);
