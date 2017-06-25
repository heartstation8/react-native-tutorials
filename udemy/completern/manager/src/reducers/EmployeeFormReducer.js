import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', shift: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMPLOYEE_UPDATE:
    const {prop, value} = action.payload;
    return {...state, [prop]: value};
    case EMPLOYEE_CREATE:
    return INITIAL_STATE;
    case EMPLOYEE_FETCH_SUCCESS:
    default:
    return state;
  }
};
