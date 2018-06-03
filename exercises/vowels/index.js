// solution #1
// const vowels = (str) => {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelsNum = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) vowelsNum++;
//   }
//   return vowelsNum;
// }

// solution #2
const vowels = (str) => {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

// solution #3
// const vowels = (str) => {
//   let re = new RegExp('[aeiou]');
//   let vowelsNum = 0;
//   for (let char of str.toLowerCase()) {
//     if (re.test(char)) vowelsNum++;
//   }
//   return vowelsNum;
// }

export default vowels;
