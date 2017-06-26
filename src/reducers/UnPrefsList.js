import { ADD_PREF, REMOVE_PREF } from '../actions';
import defaultPrefs from '../data/defaultPrefs.json';


function unPrefsList(state = defaultPrefs, action) {
  switch(action.type){
    case ADD_PREF:
      //  remove item from un prefs list (which is stored in state)
      let unPrefs = defaultPrefs.filter((item) => item !== action.value);
      return unPrefs;
    case REMOVE_PREF:
      // add item to un prefs list (ie state)
      unPrefs = [...state, action.value];
      return unPrefs;
    default:
      return state;
  }
}
