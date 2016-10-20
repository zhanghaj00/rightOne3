/**
 * Created by zhanghao on 2016/10/20.
 */
/**
 * Created by zhanghao on 2016/9/20.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text, ListView,Image,RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {COMMON_BACKGROUND_COLOR,APP_MAIN_COLOR} from '../../comm/Const';
import {fetchBlogData} from '../../action/DataApi';
import CommWebView from '../../comm/CommWebView';

import CommonTouchComponent from '../../comm/CommonTouchComponent';

class BlogListView extends Component{

    constructor(props){
        super(props);
        this.category = this.props.category;
        this.tagName = this.props.tagName;
        this.isRefreshing = this.props.isRefreshing;
    }

    componentDidMount(){
        this._fetchData();
    }

    shouldComponentUpdate(nextProps) {
        if (this.tagName !== nextProps.tagFlag) return false;
        return true;
    }

// <View style={styles.container1}>
// <Text style={styles.constext} numberOfLines={2}>{newsData.title}</Text>
// </View>
    _renderItem(newsData){
        return(
            <CommonTouchComponent onPress={this._onItemPress.bind(this,newsData)}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.itemViewContainer}>
                        <Text style={styles.title} numberOfLines={2}>{newsData.title}</Text>
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
                            refreshing={this.state.isRefreshing}
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
        this.props.dispatch(fetchBlogData(this.tagName,this.category));
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
        status: store.newsDataReducer.status,            //表示数据状态/  初始化/开始/加载失败/加载成功
        dataSource:  store.newsDataReducer.dataSource,       //表示数据源
        ext:    store.newsDataReducer.ext, //表示是否是第一页。数据叠加
        tagFlag:store.newsDataReducer.tagFlag,
        isRefreshing:store.newsDataReducer.isRefreshing,
    }
}

export default connect(select)(BlogListView);
