import axios from "../commons/http";
import { types } from "./types";
import { history } from "../App";

export const getInvoices = () => async (dispatch, getState) => {
  const token = getState().login.token;
  try {
    const response = await axios.get("/invoices", {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: types.GET_INVOICE,
      payload: response.data.invoices,
    });
  } catch (e) {
    //TODO: handle error handling
    console.log("Error Occured in Get Invoice");
  }
};

export const createInvoice = (type, amount, note) => async (
  dispatch,
  getState
) => {
  const token = getState().login.token;
  const data = { type: type, amount: amount, note: note };
  try {
    const response = await axios.post("/invoices/add", data, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getInvoices());
    dispatch({
      type: types.CREATE_INVOICE,
      payload: response.data.status,
    });
  } catch (e) {
    //TODO: handle error handling
    console.log("Error Occured in Get Invoice");
  }
};

export const logout = () => {
  history.push("/");
  return {
    type: "USER_LOGOUT",
  };
};
