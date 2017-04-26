/*
** This is the entry point for the reducers that the Redux store will be created from.
*/

import { combineReducers } from 'redux';
import filteredResults from './filteredResults';

const mainReducer = combineReducers({
  filteredResults
})

export default mainReducer;