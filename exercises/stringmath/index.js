// calculate string math include add and multiple
// '1+11*7*2+3' should return 158

// o(n2)
// function sumString (str) {
//   let numArr = str.split('+');
//   let sum = 0;
//   numArr.forEach(num => {
//     if (!num.indexOf('*')) return sum += parseInt(num);
//     let multipleSum = 1;
//     num.split('*').forEach(multiple => {
//       multipleSum = multipleSum * parseInt(multiple);
//     });
//     return sum += multipleSum;
//   })
//   return sum;
// }

// o(n)
function sumString (str) {
  let sum = 0;
  let multipleSum = 1;
  let multipleStr = '';
  let numArr = str.split('+');
  for (let i = 0; i < numArr.length; i ++) {
    if(numArr[i].search(/\*/g) === -1) {
      sum += parseInt(numArr[i]);
    } else {
      multipleStr += numArr[i];
    }
  };
  numArr = multipleStr.split('*');
  for (let i = 0; i < numArr.length; i ++) {
    multipleSum = multipleSum * parseInt(numArr[i]);
  }
  return sum + multipleSum;
}

sumString('1+11*7*2+3');
