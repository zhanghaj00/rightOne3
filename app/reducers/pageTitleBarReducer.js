/**
 * Created by zhanghao on 2016/9/20.
 */
import * as TYPES from '../action/types'
const initPageIndex = {
    selectPageIndex : 0
}


export default function selectPageIndex(state = initPageIndex,action){

    switch(action.type){
        case TYPES.PAGETITLEBAR_FLAG:
            return {
                ...state,
                selectPageIndex: action.selectPageIndex,
            };
            break;
        default:
            return state;
    }

}
