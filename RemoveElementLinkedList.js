/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head == null) return head;
  var temp = new ListNode(0);
  temp.next = head;
  var current = temp;
  while (current != null) {
    if (current.next.val == val) {
      current.next = current.next.next;
    }
    else {
      current = current.next;
    }
  }
  return temp.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(6)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(6)
removeElements(head, 6);
head = new ListNode(1);
head.next = new ListNode(1);
removeElements(head, 1);
