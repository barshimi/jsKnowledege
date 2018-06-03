export default function Node (data) {
  this.data = data;
  this.children = [];
  this.add = (data) => {
    this.children.push(new Node(data));
  }
}
