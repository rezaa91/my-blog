const minPasswordLength = 6;
const maxPasswordLength = 40;

export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;

  return emailRegex.test(email);
}

export function validatePassword(password) {
  if (password.length < minPasswordLength || password.length > maxPasswordLength) {
    return false;
  }

  return true;
}