import { combineReducers } from 'redux';
import Library from './list';
import SelectLib from './select';

export default combineReducers({
  libraries: Library,
  sellib: SelectLib
});
