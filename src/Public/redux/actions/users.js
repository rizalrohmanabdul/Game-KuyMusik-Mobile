import axios from "axios";
let URL = 'http://192.168.100.42:3344';

export const loginUser = data => {
  console.log("ini dari aksi", data);
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/users/login", data)
  };
};

export const registerUser = (data) => {
  return {
    type: "REGISTER_USER",
    payload: axios.post(URL + "/users/register", data)
  };
};
