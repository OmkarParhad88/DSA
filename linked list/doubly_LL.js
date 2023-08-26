// doubly linked list
// var head;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

var head = null;
var last = null;

function insert(data) {
  let node = new Node(data);

  if (head == null) {
    head = last = node;
    head.next = last;
  } else {
    let current = last;
    last = new Node(data);
    current.next = last;
    last.prev = current;
  }
}


function insertAtPos(data,item) {
  let node = new Node(data);
  let temp = head;

  while (temp.data != item) {
    temp = temp.next;
  }
  node.next = temp.next;
  node.prev = temp;
  temp.next = node;
  temp.next.prev = node; 
}

function PrintForword() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }  
}

function PrintBackword() {
  let temp = last;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.prev;
  }
}


insert(34);
insert(44);
insert(55);
insert(67);
// insert(78);

// insertATFrist(67);

insertAtPos(6666,44);
PrintForword();
// PrintBackword();
