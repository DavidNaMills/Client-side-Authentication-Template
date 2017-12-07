import { combineReducers } from 'redux';
// import commentsReducers from './comments';
// import authenticated from './authentication';
// import users from './users';
import {reducer} from 'redux-form';
import auth from './authReducer';

const defaultState = [];

const rootReducer = combineReducers({
  form:reducer,
  auth
});

export default rootReducer;
