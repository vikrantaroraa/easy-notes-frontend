import {USER_INFO} from '../actions/types';

const initialState ={}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_INFO:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default userReducer;