/**
 * Created by zhanghao on 2016/10/20.
 */
import React,{Component} from 'react';
import {ScrollView,View, Text, TextInput, StyleSheet,Dimensions} from 'react-native';
import CommonTitleBar from '../../comm/CommonTitleBar';
import {COMMON_BACKGROUND_COLOR,TITLE_BAR_HEIGHT,FOOT_BAR_HEIGHT} from '../../comm/Const';


class BlogInputView extends Component{

    constructor(props){
        super(props);

        this.state = {
            textHeight : Dimensions.get('window').height - TITLE_BAR_HEIGHT - TITLE_BAR_HEIGHT - FOOT_BAR_HEIGHT,
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <CommonTitleBar
                    ref="writeBlog"
                    title='写博客'
                    onLeftButtonClick={this.props.onDrawerOpen}
                    isMainPage={true}
                    />
                <ScrollView ref='scrollView'
                            keyboardDismissMode='interactive'
                            style={[{flex:1},{height: this.state.textHeight}]}
                            contentContainerStyle={{flex:1}}>
                        <TextInput style={[{height: this.state.textHeight},styles.mainInput]}
                                    multiline={true}></TextInput>
                </ScrollView>

                <View style={styles.footStyle}><Text>2111</Text></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: COMMON_BACKGROUND_COLOR,
    },
    mainLayer:{
        flex:1,
        height:200,
    },
    mainInput:{
        padding:5,
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: '#185788',
        justifyContent:'center'
    },
    footStyle:{
        flex:1,
        height:FOOT_BAR_HEIGHT,
        borderRadius:5,
        borderColor:'#B3B3B3'
    }
});

export default BlogInputView;