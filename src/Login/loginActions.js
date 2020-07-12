import axios from "../commons/http";
import { types } from "./types";
import { history } from '../App';

export const login = (username, password) => async (dispatch) => {
  try {
    const requestBody = {
      username: username,
      password: password,
    };
    const response = await axios.post("/auth/login", requestBody);

    dispatch({
      type: types.LOGIN,
      payload: response.data,
    });
    history.push("/dashboard");
  } catch (e) {
    //TODO: handle error handling
    console.log("Error Occured in Login");
  }
};
