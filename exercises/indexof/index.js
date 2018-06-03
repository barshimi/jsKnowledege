
function indexOf (arr, key) {
  return arr.reduce((loc, elem, idx) => {
    if (elem === key) loc = idx;
    return loc;
  }, -1);
}

console.log(indexOf([5, 7, 87, 34, 55, 21], 34));
