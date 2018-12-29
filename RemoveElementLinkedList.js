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
  var temp = ListNode(0);
  temp.next = head;
  var current = temp;
  while (current.next != null) {
    if (current.next.val == val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return temp.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
