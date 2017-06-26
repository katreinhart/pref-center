export const IMPORT_PREFS = "IMPORT_PREFS";
export const ADD_PREF = "ADD_PREF";
export const REMOVE_PREF = "REMOVE_PREF";

function importPrefs() {
  return {
    type: IMPORT_PREFS,
    prefs
  }
}

function addPref(value) {
  return {
    type: ADD_PREF,
    value
  }
}

function removePref(value) {
  return {
    type: REMOVE_PREF,
    value
  }
}
