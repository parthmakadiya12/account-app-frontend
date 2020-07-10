import ActualAxios from "axios";

var axios = ActualAxios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    Accept: "*"
  }
});

export default axios;
