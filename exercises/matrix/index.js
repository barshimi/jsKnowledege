const matrix = (n) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n -1;
  let startRow = 0;
  let endRow = n -1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // bottem row
    for (let i = endColumn; i >= startColumn; i--) {
       results[endRow][i] = counter;
       counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

// const matrix = (n) => {
//   const mainArr = new Array(n);
//   let row = 0;
//   let col = 0;
//   let checkFunction = horizontal;
//   let indexObject;
//
//   for (var i=0; i < n; i++) {
//      mainArr[i] = new Array(n);
//   }
//
//   for(var i=0; i < n*n; i++) {
//       mainArr[row][col] = i + 1;
//       indexObject = checkFunction(row, col);
//       if(indexObject === -1) {
//          indexObject = shiftCheck(row, col);
//       }
//       row = indexObject.row;
//       col = indexObject.col;
//   }
//
//   function shiftCheck(row, col) {
//    if (checkFunction === horizontal) {
//        checkFunction = vertical;
//    } else {
//    		checkFunction = horizontal;
//    }
//    return checkFunction(row, col);
//   }
//
//   function horizontal(row, col) {
//     if (col < n-1 && mainArr[row][col+1] === undefined) {
//     	return {row: row,col: ++col};
//     }
//     if (col > 0 && mainArr[row][col-1] === undefined) {
//     	return {row: row, col: --col};
//     }
//     return -1;
//   }
//   function vertical(row, col) {
//     if (row < n-1 && mainArr[row+1][col] === undefined) {
//     	return {row: ++row, col: col};
//     }
//     if (row > 0 && mainArr[row-1][col] === undefined) {
//     	return {row: --row, col: col};
//     }
//     return -1;
//   }
//
//   return mainArr;
// }



export default matrix;
