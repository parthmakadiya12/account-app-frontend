import { combineReducers } from "redux";
import login from "../Login/loginReducer";

const rootReducer = combineReducers({ login });

export default rootReducer;
