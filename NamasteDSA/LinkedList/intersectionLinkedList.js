function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let currentNodeA = headA;
  let seenNodes = new Set();

  while (currentNodeA) {
    hash.add(currentNodeA);
    currentNodeA = currentNodeA.next;
  }

  let currentNodeB = headB;

  while (currentNodeB) {
    if (hash.has(currentNodeB)) return currentNodeB;

    currentNodeB = currentNodeB.next;
  }

  return null;
}
