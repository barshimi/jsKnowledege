// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution #1
// const steps = (n) => {
//   for (let i = 1; i <= n; i++) {
//     let steps = '#'.repeat(i);
//     let spaces = ' '.repeat(n - i);
//     // let steps = Array(i).fill('#').join('');
//     // let spaces = Array(n - i).fill(' ').join('');
//     console.log(steps + spaces);
//   }
// }

// solution #2
const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let stair = '';
    for (let j = 0; j < n; j++) {
      stair += j <= i ? '#' : ' ';
    }
    console.log(stair);
  }
}

// solution #3
// const steps = (n, row = 0, stair = '') => {
//   if (n === row) return;
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, ++row);
//   }
//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }

export default steps;
