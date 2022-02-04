import { combineReducers } from 'redux';
import getPokByName from './getPokByName';

const rootReducer = combineReducers({ getPokByName });

export default rootReducer;