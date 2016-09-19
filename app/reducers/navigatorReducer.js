import * as TYPES from '../action/types'

const initNavigator = {
      tab : TYPES.NAVIGATOR_TAB.HOME
}


export default function navigator(state = initNavigator,action){

    switch(action.type){
      case TYPES.NAVIGATOR_FLAG:
        return  Object.assign({},state,{tab:action.tab});
        break;
      default:
        return state;
    }

}
