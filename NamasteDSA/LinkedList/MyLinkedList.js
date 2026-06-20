function Node(value) {
  this.value = value === undefined ? 0 : value;
  this.next = next === undefined ? null : next;
}

var MyLinkedList = () => {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = (index) => {
  if (index < 0 || index >= this.size) {
    return -1;
  }

  let currentNode = this.head;

  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

MyLinkedList.prototype.addAtHead = (value) => {
  const newNode = new Node(value);

  newNode.next = this.head;
  this.head = newNode;

  this.size++;
};

MyLinkedList.prototype.addAtTail = (value) => {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
  } else {
    const currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = (value, index) => {
  const newNode = new Node(value);

  if (index < 0 || index > this.size) {
    return;
  } else if (index === 0) {
    addAtHead(value);
    return;
  } else if (index === this.size) {
    addAtTail(value);
    return;
  } else {
    const currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = (value, index) => {
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
  }

  this.size--;
};

MyLinkedList.prototype.getMiddleNodeUsingArray = () => {
  if (!this.head) return;

  let currentNode = this.head;
  const array = [];

  while (currentNode.next) {
    array.push(currentNode);
    currentNode = currentNode.next;
  }

  array.push(currentNode);

  return array[Math.floor(array.length / 2)];
};

MyLinkedList.prototype.getMiddleNode = () => {
  if (!this.head) return;

  let slowPointer = this.head;
  let fastPointer = this.head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

MyLinkedList.prototype.getMiddleNode = () => {
  if (!this.head || !this.head.next) return this.head;

  let previousNode = null;
  let currentNode = this.head;

  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }

  return previousNode;
};

MyLinkedList.prototype.hasCycleUsingSet = () => {
  if (!this.head || !this.head.next) return false;

  let hashSet = new Set();
  let currentNode = this.head;

  while (currentNode) {
    if (hashSet.has(currentNode)) return true;

    hashSet.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
};

MyLinkedList.prototype.hasCycle = () => {
  if (!this.head || !this.head.next) return false;

  let slowPointer = this.head;
  let fastPointer = this.head.next;

  while (slowPointer != fastPointer) {
    if (!fastPointer || !fastPointer.next) return false;

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return true;
};

MyLinkedList.prototype.isPalindromeUsingArray = () => {
  if (!this.head || !this.head.next) return true;

  let currentNode = this.head;
  let array = [];

  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    if (array[start] !== array[end]) return false;

    start++;
    end--;
  }

  return true;
};

MyLinkedList.prototype.isPalindrome = () => {
  if (!this.head || !this.head.next) return true;

  let slowPointer = this.head;
  let fastPointer = this.head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let previousNode = null;
  let currentNode = slowPointer;

  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }

  currentNode = this.head;

  while (previousNode) {
    if (previousNode.value !== currentNode.value) return false;

    previousNode = previousNode.next;
    currentNode = currentNode.next;
  }

  return true;
};

MyLinkedList.prototype.removeElements = (value) => {
  if (!this.head) return this.head;

  let sentinalNode = new Node();
  sentinalNode.next = this.head;
  let previousNode = sentinalNode;

  while (previousNode && previousNode.next) {
    if (previousNode.next.value === value) {
      previousNode.next = previousNode.next.next;
    } else {
      previousNode = previousNode.next;
    }
  }

  return sentinalNode.next;
};

MyLinkedList.prototype.removeNthNodeFromEndTwoPass = (n) => {
  let sentinalNode = new Node();
  sentinalNode.next = this.head;
  let previousNode = sentinalNode;
  let size = 0;

  while (this.head) {
    size++;
    this.head = this.head.next;
  }

  let nodeToRemove = size - n;

  for (let i = 0; i < nodeToRemove; i++) {
    previousNode = previousNode.next;
  }

  previousNode.next = previousNode.next.next;

  return sentinalNode.next;
};

MyLinkedList.prototype.removeNthNodeFromEndOnePass = (n) => {
  let sentinalNode = new ListNode();
  sentinalNode.next = this.head;
  let slowPointer = sentinalNode;
  let fastPointer = sentinalNode;

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next;
  }

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  slowPointer.next = slowPointer.next.next;

  return sentinalNode.next;
};

MyLinkedList.prototype.removeDuplicates = () => {
  if (!this.head) return this.head;

  let currentNode = this.head;

  while (currentNode && currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return this.head;
};

MyLinkedList.prototype.getOddEvenList = () => {
  if (!this.head) return this.head;

  let oddPointer = this.head;
  let evenPointer = this.head.next;
  let evenPointerStart = evenPointer;

  while (oddPointer && oddPointer.next && evenPointer && evenPointer.next) {
    oddPointer.next = oddPointer.next.next;
    evenPointer.next = evenPointer.next.next;
    oddPointer = oddPointer.next;
    evenPointer = evenPointer.next;
  }

  oddPointer.next = evenPointerStart;

  return this.head;
};
