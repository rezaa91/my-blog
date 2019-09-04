const TOKEN = 'token';

export function storeToken(token) {
  if (!token) {
    console.log(`invalid token passed to auth.js:storeToken. Expected valid token, recieved: ${token}`);

    return;
  }

  localStorage[TOKEN] = token;
}

export function removeToken() {
  localStorage.removeItem(TOKEN);
}
