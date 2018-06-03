import palindrome from './index.js';

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

test('"Madam, I\'m Adam" a palindrome', () => {
  expect(palindrome("Madam, I\'m Adam").toBeTruthy());
});

test('"My age is 0, 0 si ega ym." a palindrome', () => {
  expect(palindrome("My age is 0, 0 si ega ym.").toBeTruthy());
});

test('"A man, a plan, a canal. Panama" a palindrome', () => {
  expect(palindrome("A man, a plan, a canal. Panama").toBeTruthy());
});
