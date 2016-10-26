/**
 * Created by zhanghao on 2016/10/26.
 */

import loginRealm from '../domain/userLogin';

export function saveLoginUser(obj){
    loginRealm.write(()=>{
        loginRealm.create('userLogin', {username: obj, isLogin:true});
    });
    return true;
}

export function getLoginUser(){
    let obj = loginRealm.objects('userLogin');
    console.log("this is obj"+obj);
    let result = obj;
    if(result){
        return result.isLogin;
    }
    return false;
}

export function removeLoginUser(){
    let userLogin = loginRealm.objects('userLogin');
    loginRealm.delete(userLogin);
}