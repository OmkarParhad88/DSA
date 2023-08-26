// doubly circular linked list

// var head;
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

var head = null;

function insert(data) {
  let newnode = new Node(data);

  if (head == null) {
    head = newnode;
    head.next = head
    head.prev = head
    return;
  } 
  let current = head;
  while (current.next != head) {
    current = current.next;
  }
  current.next =newnode ;
  newnode.prev = current;
  head.prev = newnode;
  newnode.next = head
}

function insertAtPos(data, pos) {
  let node = new Node(data);
  let temp = head;

  while (--pos) {
    temp = temp.next;
  }
  node.next = temp.next;
  node.prev=temp;
  temp.next = node;
}

function PrintForword() {
  let temp = head;
  do {
    console.log(temp.data + " ");
    temp = temp.next;
  } while (temp != head);
}

function PrintBackword() {
  let temp = head.prev
  do {
    console.log(temp.data + " ");
    temp = temp.prev;
  } while (temp != head.prev);
}

insert(33);
insert(44);
insert(55);
insert(66);
insert(77);
insert(88);
// console.log(head)
// insertATFrist(67)
insertAtPos(30800, 3)
PrintForword();
// PrintBackword()

