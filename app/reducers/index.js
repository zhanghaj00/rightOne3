import {combineReducers} from 'redux';

import navigatorReducer from './navigatorReducer';
import pageTitleBarReducer from './pageTitleBarReducer';
import NewsDataReducer from './newsDataReducer';
import LoginReducer from './loginReducer';
import JdPriceReducer from './jdPriceReducer';

export default combineReducers(
    {   navigatorReducer:navigatorReducer,
        pageTitleBarReducer:pageTitleBarReducer,
        newsDataReducer:NewsDataReducer,
        LoginReducer:LoginReducer,
        JdPriceReducer:JdPriceReducer
    }
)
