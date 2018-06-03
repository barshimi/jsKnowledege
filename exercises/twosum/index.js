
function twoSum1 (numArr, sum) {
  const result = [];
  for(let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++){
      if (numArr[i] + numArr[j] === sum) result.push([numArr[j], numArr[i]]);
    }
  }
  return result;
}

function twoSum2 (numArr, sum) {
  const result = [];
  const hashTable = [];
  numArr.forEach(num => {
    let numRest = sum - num;
    if (hashTable.indexOf(numRest) > -1) result.push([num, numRest]);
    hashTable.push(num);
  })
  return result;
}

console.log(twoSum1([1,6,4,5,3,3], 7));
console.log(twoSum2([1,6,4,5,3,3], 7));
