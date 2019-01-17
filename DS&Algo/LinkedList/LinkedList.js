import LinkedListNode from './LinkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    n = new LinkedListNode(value, this.head);
    this.head = n;

    if (!this.tail) {
      this.tail = n;
    }

    return this;
  }

  append(value) {
    n = new LinkedListNode(value);
    if (!this.head) {
      this.head = n;
      this.tail = n;
      return this;
    }
    this.tail.next = n;
    this.tail = n;
    return this;
  }

  delete(value) {

  }

  reverse() {
    currentNode = this.head;
    prevNode = null;
    nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}