// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

const Stack = () => {
  const data = [];
  return {
    push: (elem) => {
      data.push(elem);
    },
    pop: () => {
      return data.pop();
    },
    peek: () => {
      return data[data.length - 1];
    }
  }
}

export default Stack;
