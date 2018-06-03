// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// solution #1 - use es6 class with private variables
// let Queue = (function() {
//   let privateData = new WeakMap();
//   class Queue {
//     constructor() {
//       privateData.set(this, {data: []})
//     }
//
//     add(record) {
//       privateData.get(this).data.unshift(record);
//       // this.data.unshift(record);
//     }
//
//     remove() {
//       return privateData.get(this).data.pop();
//       // return this.data.pop();
//     }
//
//     get() {
//       return privateData.get(this).data;
//     }
//   }
//   return Queue;
// })();

// solution #2 - es5 module pattern
function Queue() {
  var data = [];
  return {
    add: function(record) {
      data.unshift(record);
    },
    remove: function() {
      return data.pop();
    },
    get: function() {
      return data;
    }
  }
}

export default Queue;
