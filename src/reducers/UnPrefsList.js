import { IMPORT_PREFS, ADD_PREF, REMOVE_PREF } from '../actions';
import defaultPrefs from '../data/defaultPrefs.json';

function unPrefsList(state = defaultPrefs, action) {
  switch(action.type){
    case IMPORT_PREFS:
      let unPrefs = state.filter((item) => !(action.prefs.includes(item)))
      return unPrefs;
    case ADD_PREF:
      //  remove item from un prefs list (which is stored in state)
      unPrefs = state.filter((item) => item !== action.value);
      return unPrefs;
    case REMOVE_PREF:
      // add item to un prefs list (ie state)
      unPrefs = [...state, action.value];
      return unPrefs;
    default:
      return state;
  }
}

export default unPrefsList;
