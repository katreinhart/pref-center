import { combineReducers } from 'redux';
import IMPORT_PREFS from '../actions';
import prefsList from './PrefsList';
import unPrefsList from './UnPrefsList';

// I am not at all sure about this function right now... is it even necessary
function prefs(state = [], action) {
  switch (action.type) {
    case IMPORT_PREFS:
      return action.prefs;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ prefs, prefsList, unPrefsList });

export default rootReducer;
