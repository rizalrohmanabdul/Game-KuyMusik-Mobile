import axios from "axios";
let URL = 'http://192.168.100.42:3344';

export const pointGET = () => {
  return {
    type: "POINT_GET",
    payload: axios.get(URL + "/point")
  };
};

export const pointGETMe = (id_user) => {
  return {
    type: "POINT_GETMe",
    payload: axios.get(URL + `/point/me/${id_user}`)
  };
};

