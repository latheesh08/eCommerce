import { combineReducers } from 'redux';
import storeUser from './StoreUser.js'


const rootReducer = combineReducers({
    storeUser,

});

export default rootReducer;