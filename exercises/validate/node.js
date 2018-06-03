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
