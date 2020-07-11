import { combineReducers } from "redux";
import login from "../Login/loginReducer";
import signup from "../Signup/signupReducer";
import dashboard from "../Dashboard/dashboardReducer";
import spinner from "../commons/Spinner/spinnerReducers";

const rootReducer = combineReducers({ login, signup, dashboard, spinner });

export default rootReducer;
