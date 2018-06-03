// return array of all permutation
// permutation(['c', 'a', 't']) should return
// => [ [ 'c', 'a', 't' ],
//    [ 'c', 't', 'a' ],
//    [ 'a', 'c', 't' ],
//    [ 'a', 't', 'c' ],
//    [ 't', 'c', 'a' ],
//    [ 't', 'a', 'c' ] ]

function permutation (arr) {
  if (!arr.length) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let arrCopy = arr.slice();
    let char = arrCopy.splice(i, 1);
    let perms = permutation(arrCopy);
    result.push(...perms.map(p => char.concat(p)));
  }
  return result;
}

permutation(['c', 'a', 't']);
