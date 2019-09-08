import { LOGIN_USER, GET_USER, REGISTER_USER, REMOVE_USER } from "../actions/types";

const initialState = {
  user: {},
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
