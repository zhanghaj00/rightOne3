/**
 * Created by zhanghao on 2016/10/25.
 */
import * as TYPES from '../action/types'

const initNavigator = {
    status : TYPES.LOGIN_STATUS.FAIL
}


export default function login(state = initNavigator,action){

    switch(action.type){
        case TYPES.LOGIN_STATUS.SUCCESS:
            return{
            ...state,
            status:action.type,
                };
            break;
        case TYPES.LOGIN_STATUS.FAIL:
             return{
            ...state,
            status:action.type,
        };
            break;
        default:
            return state;
    }

}
