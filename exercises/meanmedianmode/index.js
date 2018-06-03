
function getMean(array) {
  let sumArr = array.reduce((sum, num) => sum += num, 0)
  return sumArr / array.length
}

function getMedian(array) {
  array.sort((a, b) => a - b);
  return array.length % 2 ? array[Math.floor(array.length / 2)] : (array[(array.length / 2)] + array[(array.length / 2) - 1]) / 2;
}

function getMode(array) {
  let arrHashTbl = array.reduce((Obj, num) => {
    if (!Obj.hasOwnProperty(num)) Obj[num] = 0;
    Obj[num]++;
    return Obj;
  }, {});

  let max = 0;
  let modes = [];
  for (let num in arrHashTbl) {
    if (arrHashTbl[num] === max) {
      modes.push(num);
      continue;
    }
    if (arrHashTbl[num] > max) {
      modes = [num];
      max = arrHashTbl[num];
    }
  }
  if (modes.length === Object.keys(arrHashTbl)) return [];
  return modes;
}

function meanMedianMode (arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

console.log(meanMedianMode([9,10,23,10,23,9]));
