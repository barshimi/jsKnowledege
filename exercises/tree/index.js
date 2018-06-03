// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export function Node (data) {
  this.data = data;
  this.children = [];
  this.add = (data) => {
    this.children.push(new Node(data));
  }
  this.remove = (data) => {
    this.children = this.children.filter(node => node.data !== data);
  }
}

export function Tree () {
  this.root = null;
  // breadth first traversal
  this.traverseBF = (fn) => {
    let arrHelper = [this.root];
    while (arrHelper.length) {
      const firstElm = arrHelper.shift();
      if (firstElm.children.length) arrHelper.push(...firstElm.children)
      fn(firstElm);
    }
  }
  // depth first traversal
  this.traverseDF = (fn) => {
    let arrHelper = [this.root];
    while (arrHelper.length) {
      const firstElm = arrHelper.shift();
      if (firstElm.children.length) arrHelper.unshift(...firstElm.children);
      fn(firstElm);
    }
  }
}
