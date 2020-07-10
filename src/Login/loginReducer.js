import { types } from "./types";

const initialState = {};
const loginReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.userData,
      };
    default:
      return state;
  }
};

export default loginReducer;
