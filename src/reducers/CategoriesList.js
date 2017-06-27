import { IMPORT_PREFS, ADD_PREF, REMOVE_PREF } from '../actions';
import defaultPrefs from '../data/defaultPrefs.json';

function categoriesList(state = defaultPrefs, action) {
  switch(action.type){
    case IMPORT_PREFS:
      let categories = state.filter((item) => !(action.prefs.includes(item)))
      return categories;
    case ADD_PREF:
      //  remove item from un prefs list (which is stored in state)
      categories = state.filter((item) => item !== action.value);
      return categories;
    case REMOVE_PREF:
      // add item to un prefs list (ie state)
      categories = [...state, action.value];
      return categories;
    default:
      return state;
  }
}

export default categoriesList;
