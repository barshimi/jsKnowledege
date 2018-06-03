
export function mergeSort (arr) {
  if (arr.length === 1) return arr;
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

export function merge (left, right) {
  const results = [];
  while (left.length && right.length) {
    results.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...results, ...left, ...right];
}
