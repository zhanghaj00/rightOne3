/**
 * Created by zhanghao on 2016/10/24.
 */
import React,{Component} from 'react';
import {AsyncStorage} from 'react-native';

var USER_LOGIN_SIGN = "USER_LOGIN_SIGN";

export function _AddLoginUser(username){
        try{
             AsyncStorage.setItem(USER_LOGIN_SIGN,username);
            return true;
        }catch(error){
            return false;
        }
}

export function _removeLoginUser(){
        try{
            AsyncStorage.removeItem(USER_LOGIN_SIGN);
        }catch(error){

        }
}

export function _getLoginUser(){
        try{
            AsyncStorage.getItem(USER_LOGIN_SIGN).then((value) =>{
                if(value!=  undefined || value !=null){
                    return true;
                }else{
                    return false;
                }
            }).done();
            //username.getItem

        }catch(error){
           return false;
        }
}


