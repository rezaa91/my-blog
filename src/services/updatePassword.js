import axios from "axios";

export async function updatePassword(params) {
  try {
    const response = await axios.post("/api/user/changepassword", params, {
      credentials: 'same-origin',
      headers: {
        'CSRF-Token': typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]') ?
        document.querySelector('meta[name="csrf-token"]').content :
        null,
      }
    })

    return response;
  } catch (error) {
    console.error('Error:', error);

    if (error.response && error.response.data && error.response.data.error) {
      return error.response;
    }

    return 'Sorry, something went wrong. Please try again.';
  }
}
