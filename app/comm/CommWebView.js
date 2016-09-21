/**
 * Created by zhanghao on 2016/9/20.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet,WebView} from 'react-native';

import CommonTitleBar  from './CommonTitleBar';

class CommWebView extends Component{

    render(){

        let titleBar = (
            <CommonTitleBar
                title={this.props.title}
                onLeftButtonClick={() => this.props.navigator.pop()}
            />
        );


        return(
            <View style={{flex: 1}}>
                {titleBar}
                <WebView
                        ref="webView"
                        source={{uri: this.props.url}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        onLoadEnd={() => this.setState({loadEnd: true})}
                />
            </View>
        )
    }
}

export default CommWebView;