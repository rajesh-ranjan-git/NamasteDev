function Node(value) {
  this.value = value;
  this.next = null;
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
