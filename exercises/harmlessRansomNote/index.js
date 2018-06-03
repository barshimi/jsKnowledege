
export default function harmlessRansomNote(noteText, magazineText) {
  const magazineHashTbl = magazineText.split(' ').reduce((Obj, word) => {
    if (!Obj.hasOwnProperty(word)) Obj[word] = 0;
    Obj[word]++;
    return Obj;
  }, {});

  return noteText.split(' ').reduce((validator, word) => {
    if (!magazineHashTbl[word]) return validator = false;
    magazineHashTbl[word]--;
    if (magazineHashTbl[word] < 0) return validator = false;
    return validator;
  }, true);
};

const test = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
console.log(test);
