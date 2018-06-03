'use strict'


module.exports = {
  // Rewrite the INSERTION-SORT procedure to sort into nonincreasing instead of nondecreasing
  // order.
  nonincreasing: (array) => {
    var length = array.length
    for (var i = 1; i < length; i++) {
      var temp = array[i]
      for (var j = i - 1; i >= 0 && array[j] < temp; j--) {
        array[j+1] = array[j]
      }
      array[j+1] = temp
    }
    return array
  }
}
