import { combineReducers } from "redux";
import login from "../Login/loginReducer";
import signup from '../Signup/signupReducer';
import spinner from "../commons/Spinner/spinnerReducers";

const rootReducer = combineReducers({ login , signup , spinner });

export default rootReducer;
