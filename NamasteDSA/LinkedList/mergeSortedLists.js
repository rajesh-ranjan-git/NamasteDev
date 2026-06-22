function mergeSortedLists(headA, headB) {
  let currentNodeA = headA;
  let currentNodeB = headB;

  let merged = new Node();
  let mergedHead = merged.next;

  while (currentNodeA || currentNodeB) {
    if (
      currentNodeA &&
      currentNodeB &&
      currentNodeA.value <= currentNodeB.value
    ) {
      merged.next = currentNodeA;
      currentNodeA = currentNodeA.next;
    } else if (
      currentNodeA &&
      currentNodeB &&
      currentNodeA.value > currentNodeB.value
    ) {
      merged.next = currentNodeB;
      currentNodeB = currentNodeB.next;
    } else if (currentNodeA) {
      merged.next = currentNodeA;
      currentNodeA = currentNodeA.next;
    } else if (currentNodeB) {
      merged.next = currentNodeB;
      currentNodeB = currentNodeB.next;
    }

    merged = merged.next;
  }

  return mergedHead;
}

function mergeSortedListsBetter(headA, headB) {
  if (!headA) return headB;
  if (!headB) return headA;

  let currentNode;

  if (headA.value <= headB.value) {
    currentNode = headA;
    headA = headA.next;
  } else {
    currentNode = headB;
    headB = headB.next;
  }

  let currentNodeHead = currentNode;

  while (headA && headB) {
    if (headA.value <= headB.value) {
      currentNode.next = headA;
      headA = headA.next;
    } else {
      currentNode.next = headB;
      headB = headB.next;
    }

    currentNode = currentNode.next;
  }

  if (!headA) {
    currentNode.next = headB;
  } else if (!headB) {
    currentNode.next = headA;
  }

  return currentNodeHead;
}

function mergeSortedListsEvenBetter(headA, headB) {
  let currentNode = new Node();
  let currentNodeHead = currentNode;

  while (headA && headB) {
    if (headA.value <= headB.value) {
      currentNode.next = headA;
      headA = headA.next;
    } else {
      currentNode.next = headB;
      headB = headB.next;
    }

    currentNode = currentNode.next;
  }

  if (!headA) {
    currentNode.next = headB;
  } else if (!headB) {
    currentNode.next = headA;
  }

  return currentNodeHead.next;
}
