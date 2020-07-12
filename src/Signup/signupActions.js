import axios from "../commons/http";
import { types } from "./types";
import { history } from '../App';

export const signup = (userdata) => async (dispatch) => {
  try {
    const requestBody = {
      name: userdata.name,
      surname: userdata.surname,
      email: userdata.email,
      securityQue: userdata.securityQue,
      securityAns: userdata.securityAns,
      username: userdata.username,
      password: userdata.password,
    };
    await axios.post("/auth/signup", requestBody);

    dispatch({
      type: types.SIGNUP
    });
    history.push("/");
  } catch (e) {
    //TODO: handle error handling
    console.log("Error Occured in SIGNUP",e);
  }
};
