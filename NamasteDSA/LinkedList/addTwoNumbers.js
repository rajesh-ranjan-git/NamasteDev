function addTwoNumber(headA, headB) {
  let currentNodeA = headA;
  let currentNodeB = headB;

  let newNode = new Node();
  let newNodeHead = newNode.next;

  let carry = 0;

  while (currentNodeA || currentNodeB || carry) {
    let sum =
      (currentNodeA ? currentNodeA.value : 0) +
      (currentNodeB ? currentNodeB.value : 0) +
      carry;

    carry = Math.floor(sum / 10);

    newNode.next = new Node(sum % 10);

    newNode = newNode.next;
    currentNodeA = currentNodeA && currentNodeA.next;
    currentNodeB = currentNodeB && currentNodeB.next;
  }

  return newNodeHead;
}
