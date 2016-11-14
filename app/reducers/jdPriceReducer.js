/**
 * Created by zhanghao on 2016/9/20.
 */

import * as TYPES from '../action/types';
import { ListView } from 'react-native';
const initialState = {
    status:TYPES.JD_PRICE_STATUS.INIT,
    dataArray: {}, //存储临时数据
    dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    isRefreshing:false,
}
export default function jdPriceReducer(state = initialState,action){

    switch (action.type){

        case TYPES.JD_PRICE_STATUS.INIT:
            return{
                ...state,
                status:action.type,
                ext:action.ext,
                isRefreshing:false,
            };
        case TYPES.JD_PRICE_STATUS.START:
            return{
                ...state,
                status:action.type,
                isRefreshing:action.ext === -1,
            }
        case TYPES.JD_PRICE_STATUS.SUCCESS:
            let newContent = action.ext === 2 ? [...state.dataArray,...action.dataSource]:action.dataSource
            return{
                ...state,
                dataSource:state.dataSource.cloneWithRows(newContent),
                dataArray:newContent,
                ext:action.ext,
                status:action.type,
                isRefreshing: false,
            };
        default:
            return state;
    }


}
