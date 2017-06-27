import { combineReducers } from 'redux';
import prefsList from './PrefsList';
import unPrefsList from './UnPrefsList';

const rootReducer = combineReducers({ prefsList, unPrefsList });

export default rootReducer;
