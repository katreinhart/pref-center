import { IMPORT_PREFS, ADD_PREF, REMOVE_PREF } from '../actions';
import defaultPrefs from '../data/defaultPrefs.json';

function categoriesList(state = defaultPrefs, action) {
  switch(action.type){
    case IMPORT_PREFS:
      let categories = state.filter((item) => !(action.prefs.includes(item)))
      return categories;
    case ADD_PREF:
      categories = state.filter((item) => item !== action.value);
      return categories;
    case REMOVE_PREF:
      categories = [...state, action.value];
      return categories;
    default:
      return state;
  }
}

export default categoriesList;
