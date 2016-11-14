/**
 * Created by zhanghao on 2016/11/11.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text, ListView,Image,RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {COMMON_BACKGROUND_COLOR,APP_MAIN_COLOR} from '../../comm/Const';
import {fetchJdPriceData} from '../../action/DataApi';
import CommWebView from '../../comm/CommWebView';

import CommonTouchComponent from '../../comm/CommonTouchComponent';

class JdPriceListView extends Component{

    constructor(props){
        super(props);
        this.isRefreshing = this.props.isRefreshing;
    }

    componentDidMount(){
        this._fetchData();
    }

    _renderItem(newsData){
        return(
            <CommonTouchComponent onPress={this._onItemPress.bind(this,newsData)}>
                <View style={{flexDirection:'row',padding:4}}>
                    <View style={{width:80}}>
                        <Image source={{uri:newsData.goodpic}} style={{width:80, height:80, margin:7}}/>
                    </View>
                    <View style={styles.itemViewContainer}>
                        <Text style={styles.title} numberOfLines={2}>{newsData.goodname}</Text>
                        <View style={styles.line2ItemViewContainer}>
                            <Text style={styles.author}>{typeof newsData.author_name !== 'undefined' && newsData.author_name !== null ? 'via：' + newsData.author_name : ''}</Text>
                            <Text style={styles.time}>{newsData.date}</Text>
                        </View>
                    </View>
                </View>
            </CommonTouchComponent>
        )
    }

    render(){
        // let contentView = <>;
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={this._renderItem.bind(this)}
                    renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="下拉刷新"
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                />
            </View>
        )
    }

    _onRefresh(){
        this._fetchData();
    }
    _fetchData(){
        this.props.dispatch(fetchJdPriceData());
    }


    _onItemPress(newsData) {
        this.props.navigator.push({
            component: CommWebView,
            title: newsData.title,
            url: newsData.url,
        });
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COMMON_BACKGROUND_COLOR,
    },
    container1:{
        padding:10,
    },
    constext:{
        fontSize: 16,marginBottom: 8,color: '#000000',
    },
    itemViewContainer: {
        flex:1,
        padding: 10,
        marginLeft:7,
    },
    line2ItemViewContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000000',
    },
    author: {
        flex: 1,
        fontSize: 14,
        color: '#999999',
    },
    time: {
        fontSize: 14,
        color: '#999999',
        textAlign: 'right',
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc',
    },
})

function select(store){
    return{
        status: store.JdPriceReducer.status,            //表示数据状态/  初始化/开始/加载失败/加载成功
        dataSource:  store.JdPriceReducer.dataSource,       //表示数据源
        ext:    store.JdPriceReducer.ext, //表示是否是第一页。数据叠加
        isRefreshing:store.JdPriceReducer.isRefreshing,
    }
}

export default connect(select)(JdPriceListView);
