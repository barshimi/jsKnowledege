// Given an array of integers (positive and negative) find the largest continuous sum.
function continueSum (arr) {
  let finalMax = 0;
  let tempMax = 0;
  arr.forEach(num => {
    tempMax += num;
    if (tempMax < 0) tempMax = 0;
    if (finalMax < tempMax) finalMax = tempMax;
  })
  return finalMax;
}
