import axios from "axios";
// let URL = 'http://192.168.6.195:3344';
let URL = 'https://kuymusik.herokuapp.com';

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
export const usersGETMe = (id_user) => {
  return {
    type: "USERS_GETMe",
    payload: axios.get(URL + `/users/me/${id_user}`)
  };
};

export const GetUserAll = () => {
  return {
    type: "GET_USERS_ALL",
    payload: axios.get(URL + `/users/`)
  };
};
