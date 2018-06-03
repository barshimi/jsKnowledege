function binarySearch (numArray, key) {
  let middleIndx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleIndx];

  if (middleElem === key) return true;
  const splicedArr = middleElem < key ? numArray.splice(middleIndx, numArray.length) : numArray.splice(0, middleIndx);
  if (numArray.length > 1) {
    return binarySearch(splicedArr, key);
  }
  return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
