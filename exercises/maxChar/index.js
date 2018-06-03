
const maxChar = (str) => {
  const strObj = str.split('').reduce((Obj, char) => {
    Obj[char] = Obj[char] + 1 || 1;
    return Obj;
  }, {});

  let n = 0, character;
  for (let char in strObj) {
    if (strObj[char] > n) {
      n = strObj[char];
      character = char;
    }
  }
  return character;
}

export default maxChar;
