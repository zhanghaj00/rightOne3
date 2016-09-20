/**
 * Created by zhanghao on 2016/9/20.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {COMMON_BACKGROUND_COLOR,APP_MAIN_COLOR} from '../../comm/Const';
import {fetchJuheData} from '../../action/DataApi';

class NewsListView extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this._fetchData();
    }

    _renderItem(newsData){
        return(
            <View style={styles.container1}>
                <Text style={styles.constext} numberOfLines={2}>{newsData.title}</Text>
            </View>
        )
    }

    render(){
       // let contentView = <>;
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={this._renderItem.bind(this)}
                />
            </View>
        )
    }

    _fetchData(){
        this.props.dispatch(fetchJuheData(0,'top'));
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
    }
})

function select(store){
    return{
        status: store.newsDataReducer.status,            //表示数据状态/  初始化/开始/加载失败/加载成功
        dataSource:  store.newsDataReducer.dataSource,       //表示数据源
        ext:    store.newsDataReducer.ext,            //表示是否是第一页。数据叠加
    }
}

export default connect(select)(NewsListView);
