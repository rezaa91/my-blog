import axios from "axios";

import {getCsrfToken} from "../constants/global";

export async function updatePassword(params) {
  try {
    return await axios.post("/api/user/changepassword", params, {
      credentials: 'same-origin',
      headers: {
        'CSRF-Token': getCsrfToken(),
      }
    })
  } catch (error) {
    console.error('Error:', error);

    if (error.response) {
      return error.response;
    }

    return 'Sorry, something went wrong. Please try again.';
  }
}

export async function updateSubscription(subscribe) {
  try {
    return await axios.post("/api/user/subscribe", subscribe, {
      credentials: 'same-origin',
      headers: {
        'CSRF-Token': getCsrfToken(),
      }
    })
  } catch (error) {
    console.log('Error:', error);

    if (error.response) {
      return error.response;
    }

    return 'Sorry, something went wrong. Please try again.';
  }
}
