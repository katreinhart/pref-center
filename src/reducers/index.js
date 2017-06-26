import { combineReducers } from 'redux';
import IMPORT_PREFS from '../actions';

function prefs(state = [], action) {
  switch (action.type) {
    case IMPORT_PREFS:
      return action.prefs;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ prefs });

export default rootReducer;
