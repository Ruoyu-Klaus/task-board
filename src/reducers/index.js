import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import cohortReducer from './cohortReducer';

export default combineReducers({
  task: taskReducer,
  cohort: cohortReducer,
});
