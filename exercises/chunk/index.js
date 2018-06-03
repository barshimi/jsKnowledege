
 const chunk = (arr, chunk) => {
   let newArr = [];
   for (let i = 0; i < arr.length; i = i + chunk) {
     newArr.push(arr.slice(i, chunk + i));
   }
   return newArr;
 };

// const chunk = (arr, chunk) => {
//   let newArr = [];
//   let index = 0;
//   while (index < arr.length) {
//     newArr.push(arr.slice(index, index + chunk));
//     index += chunk;
//   }
//   return newArr;
// }

 // const chunk = (arr, chunk) => {
 //   let newArr = [];
 //   for (let element of arr) {
 //     const last = neArr[newArr.length - 1];
 //     if(!last || last.length === chunk) {
 //       newArr.push([element]);
 //     } else {
 //       last.push(element);
 //     }
 //   }
 //   return newArr;
 // }

 export default chunk;
