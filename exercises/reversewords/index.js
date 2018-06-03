
function reverseWords (str) {
  return str.split(' ').map(word => {
    let reverseWord = '';
    for (let i = word.length; i > 0; i--) {
      reverseWord += word[i - 1];
    }
    return reverseWord
  }).join(' ');
}

console.log(reverseWords('this is not a reverse words'));
console.log(reverseWords('Code Javascript'))
