export const IMPORT_PREFS = "IMPORT_PREFS";
export const ADD_PREF = "ADD_PREF";
export const REMOVE_PREF = "REMOVE_PREF";
export const SORT_PREFS = "SORT_PREFS";

export function importPrefs(prefs) {
  return {
    type: IMPORT_PREFS,
    prefs
  }
}

export function addPref(value) {
  return {
    type: ADD_PREF,
    value
  }
}

export function removePref(value) {
  return {
    type: REMOVE_PREF,
    value
  }
}

export function sortPrefs(prefs){
  return {
    type: SORT_PREFS,
    prefs
  }
}
