import {combineReducers} from 'redux';

import navigatorReducer from './navigatorReducer';
import pageTitleBarReducer from './pageTitleBarReducer';
import NewsDataReducer from './newsDataReducer';
import LoginReducer from './loginReducer';

export default combineReducers(
    {   navigatorReducer:navigatorReducer,
        pageTitleBarReducer:pageTitleBarReducer,
        newsDataReducer:NewsDataReducer,
        LoginReducer:LoginReducer
    }
)
