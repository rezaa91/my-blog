import axios from "axios";
import { LOGIN_USER, GET_USER, REGISTER_USER, REMOVE_USER } from "./types";

export function loginUser(params) {
  return function(dispatch) {
    axios.post("/api/auth", params, {
      credentials: 'same-origin',
      headers: {
        'CSRF-Token': typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]') ?
          document.querySelector('meta[name="csrf-token"]').content :
          null,
      }
    })
      .then(res => res.data)
      .then(user => {
        dispatch({
          type: LOGIN_USER,
          payload: user.user,
        })
      })
      .catch(err => console.log(err));
  }
}

export function registerUser(params) {
  return function(dispatch) {
    axios.post("/api/user", params, {
      credentials: 'same-origin',
      headers: {
        'CSRF-Token': typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]') ?
          document.querySelector('meta[name="csrf-token"]').content :
          null,
      }
    })
      .then(res => res.data)
      .then(user => {
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
    dispatch({
      type: REMOVE_USER,
      payload: {},
    })
  }
}

export function getUser() {
  return function(dispatch) {
    axios.get("/api/user", {
      headers: {
        'CSRF-Token': typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]') ?
          document.querySelector('meta[name="csrf-token"]').content :
          null,
      }
    })
      .then(res => res.data)
      .then(user => {
        dispatch({
          type: GET_USER,
          payload: user,
        })
      })
  }
}
