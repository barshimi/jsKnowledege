// sort mix string array by number
const arr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
arr.sort((a, b) => {
  let aNum = a.replace(/\D/g,'');
  let bNum = b.replace(/\D/g,'')
  return aNum - bNum;
});

console.log(arr)
