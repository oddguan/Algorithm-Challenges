/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// iteratively
var reverseList = function(head) {
    stack = [];
    current = head;
    while (current !== null) {
      stack.push(current.val);
      current = current.next;
    }
    dummy = new ListNode(0);
    current = dummy;
    while (stack.length !== 0) {
      var Node = new ListNode(stack.pop());
      current.next = Node;
      current = current.next;
    }
    return dummy.next;
};

//recursively
var reverseList = function(head) {
  if (ListLength(head) === 0) {
    return null;
  }
  if (ListLength(head) === 1) {
    return head;
  }
  var prev = new ListNode(0);
  prev.next = head;
  var current = head;
  while (current.next !== null) {
    current = current.next;
    prev = prev.next;
  }
  prev.next = null;
  current.next = reverseList(head);
  return current;
}

function ListLength(head) {
  if (head === null) return 0;
  if (head.next === null) return 1;
  var length = 1;
  while(head.next !== null) {
    head = head.next;
    length++;
  }
  return length;
}

var head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(5);
reverseList(head);
head = null;
reverseList(head);