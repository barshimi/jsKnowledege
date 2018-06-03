// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

export default function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
  // recursive add to binary search tree
  this.insert = (data) => {
    let side = this.data < data ? 'right' : 'left';
    if (this[side]) return this[side].insert(data);
    return this[side] = new Node(data);
  };
  // recursive contains function to binary search tree
  this.contains = (data) => {
    if (this.data === data) return this;
    let side = this.data < data ? 'right' : 'left';
    if (!this[side]) return null;
    return this[side].contains(data);
  };
}

// recursive add to binary search tree
// function locationAdd (tree, data) {
//   let side = tree.data < data ? 'right' : 'left';
//   if (tree[side]) return locationAdd(tree[side], data);
//   return tree[side] = new Node(data);
// }
