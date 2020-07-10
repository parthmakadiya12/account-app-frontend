import { types } from "./types";

export const login = (username, password) => async (dispatch) => {
  const value = {
    data: {
      token: `asdasdasdasdasdasdasdasdasdasdasdasdasd`,
    },
  };
  const response = await Promise.resolve(value);

  dispatch({
    type: types.LOGIN,
    payload: response.data,
  });
};
