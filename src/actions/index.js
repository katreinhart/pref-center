export const IMPORT_PREFS = "IMPORT_PREFS";
export const ADD_PREF = "ADD_PREF";
export const REMOVE_PREF = "REMOVE_PREF";

export function importPrefs() {
  return {
    type: IMPORT_PREFS,
    prefs
  }
}

export function addPref(value) {
  console.log('adding pref', value)
  return {
    type: ADD_PREF,
    value
  }
}

export function removePref(value) {
  console.log('removing pref', value)
  return {
    type: REMOVE_PREF,
    value
  }
}
