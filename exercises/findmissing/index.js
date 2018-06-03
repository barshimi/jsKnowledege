// find missing elements
// const arr1 = [4,1,0,2,9,6,8,7,5,3];
// const arr2 = [6,4,7,2,1,0,8,3,9];
// should return -> [5]


function findMissing (arr1, arr2) {
  const arr1HashTbl = {};
  const missingArr = []
  for (let elm of arr2) {
    arr1HashTbl[elm] = arr1HashTbl[elm] + 1 || 1;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1HashTbl[arr1[i]]) missingArr.push(arr1[i]);
    // if (arr1HashTbl[arr1[i]] && arr1HashTbl[arr1[i]] > 0) {
    //   arr1HashTbl[arr1[i]]--;
    // }
  }
  return missingArr;
}

const arr1 = [4,1,0,2,9,6,8,7,5,3];
const arr2 = [6,4,7,2,1,0,8,3,9];
findMissing(arr1, arr2);
