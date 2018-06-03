'use strict'

/**
 * Insertion sort - O(n²)
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
module.exports = (array) => {
  var length = array.length;

  for(var i = 1; i < length; i++) {
    var temp = array[i];
    console.log('i', temp);
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
      console.log('j', array[j], array);
    }
    array[j+1] = temp;
  }

  return array;
}
