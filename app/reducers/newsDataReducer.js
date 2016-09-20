/**
 * Created by zhanghao on 2016/9/20.
 */

import * as TYPES from '../action/types';
import { ListView } from 'react-native';
const initialState = {
    status:TYPES.NEWS_PAGE_STATUS.INIT,
    dataArray: {}, //存储临时数据
    dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    ext:0
}
export default function newsDataReducer(state = initialState,action){

    switch (action.type){

        case TYPES.NEWS_PAGE_STATUS.INIT:
            return{
                ...state,
                status:action.type,
                ext:action.ext
            };
        case TYPES.NEWS_PAGE_STATUS.SUCCESS:
            let newContent = action.ext === 2 ? [...state.dataArray,...action.dataSource.result.data]:action.dataSource.result.data;
            return{
                ...state,
                dataSource:state.dataSource.cloneWithRows(newContent),
                dataArray:newContent,
                ext:action.ext,
                status:action.type,
            };
        default:
            return state;
    }


}
