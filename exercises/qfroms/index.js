// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import Stack from './stack';

const Queue = () => {
  var stackA = new Stack();
  var stackB = new Stack();
  return {
    add: (record) => {
      stackA.push(record);
    },
    remove: () => {
      while (stackA.peek()) {
        stackB.push(stackA.pop());
      }
      const lestElm = stackB.pop();

      while (stackB.peek()) {
        stackA.push(stackB.pop());
      }
      return lestElm;
    },
    peek: () => {
      while(stackA.peek()) {
        stackB.push(stackA.pop());
      }

      const lestElm = stackB.peek();

      while(stackB.peek()) {
        stackA.push(stackB.pop());
      }
      return lestElm;
    }
  }
}

export default Queue;
