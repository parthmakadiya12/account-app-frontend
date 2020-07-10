import { combineReducers } from "redux";
import login from "../Login/loginReducer";
import spinner from "../commons/Spinner/spinnerReducers";

const rootReducer = combineReducers({ login , spinner });

export default rootReducer;
