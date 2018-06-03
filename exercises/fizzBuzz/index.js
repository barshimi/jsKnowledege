
const fizzBuzz = (total) => {
  const fizzIter = (iter) => {
    console.log((iter % 3 ? '' : 'fizz') + (iter % 5 ? '' : 'buzz') || iter);
    if (iter < total) fizzIter(++iter);
  }
  fizzIter(1);
}

// const fizzBuzz = (total) => {
//   for(let i = 1; i <= total; i++) {
//     console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
//   }
// }

export default fizzBuzz;
