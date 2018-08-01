import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {GameReducer} from '../component/Game/index';
import {CellReducer} from '../component/Cell/index';
import {CellItemReducer} from '../component/CellItem/index';

const rootReducer = combineReducers({
    // short hand property names
    CellReducer,
    CellItemReducer,
    GameReducer,
    router: routerReducer
    // add more reducer here
});

export default rootReducer;