/**
 * Created by zhanghao on 2016/10/21.
 */

import React,{Component} from 'react';
import {View,Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native';
import CommonTitleBar from '../comm/CommonTitleBar';
import {connect} from 'react-redux';
import * as TYPES from '../action/types'
import {LoginIn} from '../action/DataApi';
import CommonTouchComponent from '../comm/CommonTouchComponent';
import {_AddLoginUser} from '../store/localStore';
import {showToast} from '../comm/CommonToast';

const BACKGROUND_IMG = require('../img/backgrounds/back.png');

const LOGIN_MARGIN_HIGHT = Dimensions.get('window').height- 210;
const LOGIN_MARGIN_WIGTH = Dimensions.get('window').width/4;



class LoginView extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:"用户",
            password:"密码"
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.status === this.props.status) return false;

        if(nextProps.status === TYPES.LOGIN_STATUS.SUCCESS){
            _AddLoginUser(this.state.username);
            this.props.navigator.pop();return true;
        }else{
            console.log("denglushibai");
            showToast("用户名密码错误");
            this.refs.firstInput.focus();
            return false;
        }
        return false;
    }
    render(){
        return(
            <Image source={BACKGROUND_IMG} style={styles.container}>
                <CommonTitleBar
                    ref="writeBlog"
                    title='登录页面'
                    onLeftButtonClick={this.props.onDrawerOpen}
                    isMainPage={false}
                    backGroundColor='rgba(0,0,0,0)'
                />
                <View style={styles.loginLayer}>
                    <View style={styles.textView}>
                        <View style={styles.inputView} >
                            <TextInput ref="firstInput"
                                       style={styles.textInput}
                                       numberOfLines={1}
                                       underlineColorAndroid="transparent"
                                       onSubmitEditing={(event) => {
                                           this.refs.sencondInput.focus();
                                       }}
                                       onChangeText={(value)=>{
                                           this.setState({username:value});
                                       }}
                                       placeholder ={this.state.username}></TextInput>
                        </View>
                        <View style={styles.inputView} >
                            <TextInput ref="sencondInput"
                                       style={styles.textInput}
                                       numberOfLines={1}
                                       onChangeText={(text)=>{
                                           this.setState({password:text});
                                       }}
                                       underlineColorAndroid="transparent"
                                       placeholder ={this.state.password}></TextInput>
                        </View>
                        <View style={styles.submitBtnView} >
                            <CommonTouchComponent onPress={this._login.bind(this)}>
                            <View style={{flex:1,flexDirection: 'row',justifyContent:'center',
                                alignItems: 'center'}} ><Text >提交</Text></View>
                             </CommonTouchComponent>
                        </View>
                    </View>

                </View>

            </Image>
        )
    }

    _login(){
        var obj = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.dispatch(LoginIn(obj));
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
});

function select(store){
    return{
        status:store.LoginReducer.status,

    }
}

export default connect(select)(LoginView);
