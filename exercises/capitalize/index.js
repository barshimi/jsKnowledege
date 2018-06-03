// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution #1
// const capitalize = (str) => {
//   return str.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// solution #2
const capitalize = (str) => {
  let capitalizeStr = str[0].toUpperCase();
  for (let i = 1, len = str.length; i < len; i++) {
    capitalizeStr += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
  }
  return capitalizeStr;
}

export default capitalize;
