import {combineReducers} from 'redux';

import navigatorReducer from './navigatorReducer';
import pageTitleBarReducer from './pageTitleBarReducer';
import NewsDataReducer from './newsDataReducer';

export default combineReducers(
    {   navigatorReducer:navigatorReducer,
        pageTitleBarReducer:pageTitleBarReducer,
        newsDataReducer:NewsDataReducer
    }
)
