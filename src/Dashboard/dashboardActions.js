import axios from "../commons/http";
import { types } from "./types";

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

export const createInvoice = (type, amount) => async (dispatch, getState) => {
  const token = getState().login.token;
  const data = { type:type, amount:amount };
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
