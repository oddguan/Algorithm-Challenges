class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedListNode;
