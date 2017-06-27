import { combineReducers } from 'redux';
import prefsList from './PrefsList';
import categoriesList from './CategoriesList';

const rootReducer = combineReducers({ prefsList, categoriesList });

export default rootReducer;
