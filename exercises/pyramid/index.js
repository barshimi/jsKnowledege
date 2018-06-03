// solution #1
// const pyramid = (n, hashNum=1) => {
//   let midpoint = Math.floor((n * 2 - 1) / 2);
//   for (let i = 0; i < n; i++) {
//     let steps = '#'.repeat(hashNum);
//     let spaces = ' '.repeat(midpoint - i);
//     hashNum += 2;
//     console.log(spaces + steps + spaces);
//   }
// }

// solution #2
// const pyramid = (n) => {
//   let midpoint = Math.floor((n * 2 - 1) / 2);
//   for (let i = 0; i < n; i++) {
//     let level = '';
//     for (let j = 0; j < n * 2 - 1; j++) {
//       level += midpoint - i <= j && midpoint + i >= j ? '#' : ' ';
//     }
//     console.log(level);
//   }
// }

// solution #3
const pyramid = (n, row = 0, level = '') => {
  if (n === row) return;
  if (n * 2 - 1 === level.length) {
    console.log(level);
    return pyramid(n, ++row);
  }
  let midpoint = Math.floor((n * 2 - 1) / 2);
  const add = midpoint - row <= level.length && midpoint + row >= level.length ? '#' : ' ';
  pyramid(n, row, level + add);
}

export default pyramid;
