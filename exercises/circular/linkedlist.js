// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export function Node (data, next = null) {
  this.data = data;
  this.next = next;
}

export function List (values = []) {
  this.head = null;
  for (value of values) {
    this.insertLast(value);
  }
  this.insertFirst = (data) => {
    this.head = new Node(data, this.head);
  };
  this.size = () => {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  };
  this.getFirst = () => {
    return this.head;
  }
  this.getLast = () => {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
    return last;
  };
  this.clear = () => {
    this.head = null;
  };
  this.removeFirst = () => {
    if (!this.head) return;
    this.head = this.head.next;
  };
  this.removeLast = () => {
    if (!this.head) return;
    if (!this.head.next) this.head = null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      if (!node.next.next) node.next = null;
      node = node.next;
    }
  };
  this.insertLast = (data) => {
    if (!this.head) return this.insertFirst(data);
    let node = this.getLast();
    node.next = new Node(data, null);
  };
  this.getAt = (n) => {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === n) return node;
      counter++;
      node = node.next;
    }
    return null;
  };
  this.removeAt = (n) => {
    if (!this.head) return;
    if (n === 0) this.head = this.head.next;
    const previous = this.getAt(n - 1);
    if (!previous) return;
    if (!previous.next) return;
    previous.next = previous.next.next;
  };
  this.insertAt = (data, index) => {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous) return this.insertLast(data);
    previous.next = new Node(data, previous.next);
  };
  this.forEach = (fn) => {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  };

  // *[Symbol.iterator]() {
  //   let node = this.head;
  //   while (node) {
  //     yield node;
  //     node = node.next;
  //   }
  // }
}
