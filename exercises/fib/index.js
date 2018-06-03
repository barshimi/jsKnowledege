// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution #1
// const fib = (n) => {
//   for (var i = 2, fibo = [0, 1]; i <= n; i++) {
//     fibo.push(fibo[i - 1] + fibo[i - 2]);
//   }
//   return fibo[n];
//  }

// solution #2
// const fib = (n) => {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// solution #3
// Array.prototype.slice.call(arguments) => convert array like to array
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];
    const results = fn.apply(this, args);
    cache[args] = results;
    return results;
  }
}
const slowFib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// create fibonachi sequence
// function fibonachi(n) {
//   for (var i = 0, fibo = []; i <= n; i++) {
//     if (i < 1) fibo.push(0);
//     else if (i <= 2) fibo.push(1);
//     else fibo.push(fibo[i - 1] + fibo[i - 2]);
//   }
//   return fibo;
// }

 export default fib;
