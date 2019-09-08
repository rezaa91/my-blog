export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;

  return emailRegex.test(email);
}

export function validatePassword(password) {
  // checks for minimum 6 characters, at least 1 uppercase, 1 lowercase, 1 special char
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password);
}
