/**
 * Created by zhanghao on 2016/10/26.
 */
import Realm from 'realm';

const UserLogin = {
    name: 'userLogin',
    properties: {
        username:  'string',
        isLogin: 'bool'
    }
};


// Initialize a Realm with Car and Person models
const realm = new Realm({schema: [UserLogin]});


export default realm;