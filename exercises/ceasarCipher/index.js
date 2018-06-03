// lower case letter and space support
function caesarCipher1 (str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cipherStr = '';
  for (let char of str.toLowerCase()) {
    if (char === ' ') cipherStr += char;
    const currIndex = alphabet.indexOf(char);
    let newIndex = currIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    cipherStr += alphabet[newIndex];
  }
  return cipherStr;
}
// support case sensetive and other signs
function caesarCipher2 (str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cipherStr = '';
  for (let char of str) {
    const currIndex = alphabet.indexOf(char);
    const charCode = char.charCodeAt(0);
    let newIndex = currIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    if (charCode >= 65 && charCode <= 90) {
      cipherStr += alphabet[newIndex].toUpperCase();
      continue;
    }
    if (charCode >= 97 && charCode <= 122) {
      cipherStr += alphabet[newIndex];
      continue;
    }
    cipherStr += char;

  }
  return cipherStr;
}

console.log(caesarCipher2('Zoo?! Keeper!', 20))
console.log(caesarCipher1('zoo keeper', 2));
