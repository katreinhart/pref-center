import { combineReducers } from 'redux';
import IMPORT_PREFS from '../actions';
import prefsList from './PrefsList';

function prefs(state = [], action) {
  switch (action.type) {
    case IMPORT_PREFS:
      return action.prefs;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ prefs, prefsList });

export default rootReducer;
