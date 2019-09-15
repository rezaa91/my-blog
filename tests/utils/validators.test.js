import { validateEmail, validatePassword } from '../../src/utils/validators';

test('test invalid email returns false', () => {
  expect(validateEmail('notValid')).toEqual(false);
  expect(validateEmail(null)).toEqual(false);
  expect(validateEmail(123)).toEqual(false);
  expect(validateEmail(undefined)).toEqual(false);
  expect(validateEmail(true)).toEqual(false);
  expect(validateEmail(false)).toEqual(false);
  expect(validateEmail('hello@hello')).toEqual(false);
});

test('test valid email to return true', () => {
  expect(validateEmail('test@test.com')).toEqual(true);
  expect(validateEmail('test@test.co.uk')).toEqual(true);
})

test('test invalid password returns false', () => {
  expect(validatePassword('short')).toEqual(false);
  expect(validatePassword('loooooooooooong')).toEqual(false);
  expect(validatePassword('Short')).toEqual(false);
  expect(validatePassword('Loooooong')).toEqual(false);
  expect(validatePassword('Short1')).toEqual(false);
  expect(validatePassword('Looooong1')).toEqual(false);
  expect(validatePassword('St1!')).toEqual(false);
  expect(validatePassword('Loooooong!')).toEqual(false);
  expect(validatePassword(undefined)).toEqual(false);
  expect(validatePassword(null)).toEqual(false);
  expect(validatePassword(false)).toEqual(false);
  expect(validatePassword(true)).toEqual(false);
});

test('test valid password returns true', () => {
  expect(validatePassword('Valid1!')).toEqual(true);
  expect(validatePassword('123Aa!')).toEqual(true);
  expect(validatePassword('**ABc1')).toEqual(true);
  expect(validatePassword('Passw0rd!')).toEqual(true);
})
