/**
 * Created by zhanghao on 2016/10/21.
 */

import React,{Component} from 'react';
import {View,Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native';
import CommonTitleBar from '../comm/CommonTitleBar';

const BACKGROUND_IMG = require('../img/backgrounds/back.png');

const LOGIN_MARGIN_HIGHT = Dimensions.get('window').height- 210;
const LOGIN_MARGIN_WIGTH = Dimensions.get('window').width/4;

class LoginView extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"用户",
            password:"密码"
        }
    }

    render(){
        return(
            <Image source={BACKGROUND_IMG} style={styles.container}>
                <CommonTitleBar
                    ref="writeBlog"
                    title='登录页面'
                    onLeftButtonClick={this.props.onDrawerOpen}
                    isMainPage={true}
                    backGroundColor='rgba(0,0,0,0)'
                />
                <View style={styles.loginLayer}>
                    <View style={styles.textView}>
                        <View style={styles.inputView} >
                            <TextInput style={styles.textInput} numberOfLines={1} underlineColorAndroid="transparent" placeholder ={this.state.name}></TextInput>
                        </View>
                        <View style={styles.inputView} >
                            <TextInput style={styles.textInput} numberOfLines={1} underlineColorAndroid="transparent" placeholder ={this.state.password}></TextInput>
                        </View>
                        <View style={styles.submitBtnView} >
                            <View style={{flex:1,flexDirection: 'row',justifyContent:'center',
                                alignItems: 'center'}} ><Text >提交</Text></View>
                        </View>
                    </View>

                </View>

            </Image>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        width:null,
        height:null,
        backgroundColor:'rgba(0,0,0,0)',
        resizeMode:'stretch'
    },
    loginLayer:{
        flex:1,
        // marginTop:LOGIN_MARGIN_HIGHT,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:LOGIN_MARGIN_WIGTH,
        marginRight:LOGIN_MARGIN_WIGTH,
        borderRadius:5,
        borderColor: '#090909',
        // boxShadow:'2px 2px 5px #333333'
    },
    textView:{
        flex:1,
        marginTop:55,
    },
    inputView:{
        width: 270,
        height: 42,
        marginTop:25,
        padding:15,
        //backgroundColor: '#2d2d2d',
        borderRadius:8,
        borderWidth:1,
        elevation:5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput:{
        height:42,
        width:240,
        flex:1,
        ///fontFamily:' Helvetica, Arial, sans-serif',
        fontSize:17,
        color:'#2d2d2d',
       // textShadow:'0 1 4 rgba(0,0,0,.2)' ,
    },
    submitBtnView:{
        width: 270,
        height: 42,
        marginTop:25,
        backgroundColor: '#EF4A0A',
        borderRadius:8,
        borderWidth:1,
        elevation:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',

    }
})
export default LoginView;
