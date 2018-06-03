// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution #1
// const anagrams = (stringA, stringB) => {
//   const cleanStringA = cleanString(stringA);
//   const cleanStringB = cleanString(stringB);
//   if (cleanStringA.length !== cleanStringB.length) return false;
//   const stringA_map = createStringMap(cleanStringA);
//   const stringB_map = createStringMap(cleanStringB);
//
//   for (let char in stringA_map) {
//     if (!stringB_map[char]) return false;
//     if (stringA_map[char] !== stringB_map[char]) return false;
//   }
//   return true;
// }
//
// const cleanString = (str) => str.replace(/[\W]/g, '').toLowerCase();
// const createStringMap = (str) => {
//   const obj = {};
//   for (let char of str) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// }

// solution #2
const anagrams = (stringA, stringB) => cleanReverseString(stringA) === cleanReverseString(stringB);

const cleanReverseString = (str) => str.replace(/[\W]/g, '').toLowerCase().split('').sort().join();

export default anagrams;
