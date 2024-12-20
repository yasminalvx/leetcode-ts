//19/11/2024

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = new ListNode(0);
  let item = result;
  let acc = 0;
  let a = l1;
  let b = l2;
  while (a || b) {
    let sum = (a?.val || 0) + (b?.val || 0) + acc;
    if (sum >= 10) {
      sum -= 10;
      acc = 1;
    } else {
      acc = 0;
    }
    item.val = sum;
    a = a?.next || null;
    b = b?.next || null;
    if (a || b || acc) {
      item.next = new ListNode(acc);
      item = item.next;
    }
  }
  return result;
};