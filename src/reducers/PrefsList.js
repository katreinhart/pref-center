import axios from 'axios';

import { IMPORT_PREFS, ADD_PREF, REMOVE_PREF, SORT_PREFS } from '../actions';

function prefsList(state=[], action) {
  switch(action.type) {
    case IMPORT_PREFS:
      let prefs = action.prefs.map((item) => item);
      return prefs;
    case ADD_PREF:
      prefs = [...state, action.value];
      return prefs;
    case REMOVE_PREF:
      prefs = state.filter((item) => item !== action.value )
      return prefs;
    case SORT_PREFS:
      prefs = action.prefs.map((item) => item)
      return prefs;
    default:
      return state;
  }
}

export default prefsList;
