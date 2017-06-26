import { IMPORT_PREFS, ADD_PREF, REMOVE_PREF } from '../actions';

function prefsList(state=[], action) {
  switch(action.type) {
    case ADD_PREF:
      let prefs = [...state, action.value];
      return prefs;
    case REMOVE_PREF:
      prefs = state.filter((item) => item !== action.value )
      return prefs;
    default:
      return state;
  }
}

export default prefsList;
