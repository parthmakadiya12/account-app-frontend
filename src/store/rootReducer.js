import { combineReducers } from "redux";
import login from "../Login/loginReducer";
import signup from "../Signup/signupReducer";
import dashboard from "../Dashboard/dashboardReducer";
import spinner from "../commons/Spinner/spinnerReducers";

const appReducer = combineReducers({ login, signup, dashboard, spinner });

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    const { routing } = state;
    state = { routing };
  }
  return appReducer(state, action);
};
export default rootReducer;
