import {
  EMAIL_CHANGED,
  PW_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
    return { ...state, email: action.payload };
    case PW_CHANGED:
    return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
    return { ...state, ...INITIAL_STATE, user: action.payload, password:'' };
    case LOGIN_USER_FAIL:
    return { ...state, ...INITIAL_STATE, error: 'Authentication Failed.' };
    case LOGIN_USER:
    return { ...state, loading: true, error: '' };
    default:
    return state;
  }
};
