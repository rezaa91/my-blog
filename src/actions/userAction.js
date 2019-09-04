import axios from "axios";
import { GET_USER, REGISTER_USER, REMOVE_USER } from "./types";
import { storeToken, removeToken } from "../utils/auth";

export function getUser(params) {
  return function(dispatch) {
    axios.post("/api/auth", params)
      .then(res => res.data)
      .then(user => {
        storeToken(user.token);

        dispatch({
          type: GET_USER,
          payload: user.user,
        })
      })
      .catch(err => console.log(err));
  }
}

export function registerUser(params) {
  return function(dispatch) {
    axios.post("/api/users", params)
      .then(res => res.data)
      .then(user => {
        storeToken(user.token);

        dispatch({
          type: REGISTER_USER,
          payload: user.user,
        })
      })
      .catch(err => console.log(err));
  }
}

export function removeUser() {
  return function(dispatch) {
    removeToken();

    dispatch({
      type: REMOVE_USER,
      payload: {},
    })
  }
}
