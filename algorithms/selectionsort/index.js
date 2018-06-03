
export default function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) indexofMin = j;
    }
    if (indexofMin !== i) {
      let temp = arr[indexofMin];
      arr[indexofMin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
