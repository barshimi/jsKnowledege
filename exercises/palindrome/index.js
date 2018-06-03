
// const palindrome = (str, flag=null) => {
//   let string = str;
//   // let string = flag ? str : str.toLowerCase().replace(/[\W_]/g, "");
//   if (string[0] !== string[string.length - 1]) return false;
//   return string.length <= 1 ? true : palindrome(string.slice(1, -1), true);
// }

// const palindrome = (str) => {
//   let re = new RegExp("^[a-z0–9_]");
//   let newArr = str.toLowerCase().split('').filter(char => re.test(char));
//   return newArr.join('') === newArr.reverse().join('');
// }

const palindrome = (str) => {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

export default palindrome;
