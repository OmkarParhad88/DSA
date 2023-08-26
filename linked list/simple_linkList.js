// A simple javascript program for traversal of a link list
// var head;
class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var head = null;
function insert(data) {
  let node = new Node(data);

  if (head == null) {
    head = node;
  } else {
    let current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
}

 function insertATFrist(data){
  let node = new Node(data);
  if (head == null) {
    head = node;
  } else {
    let temp = head;
    head = node;
    head.next = temp;
  }
}

function insertAtPos(data, pos){
  let node = new Node(data);
  let temp = head;

  while (--pos) {
    temp = temp.next;
  }
  let temp2 = temp.next
  temp.next = node;
  node.next = temp2;
}

function PrintData() {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

insert(34);
insert(54);
insert(45);
insert(456);
insert(467);
// insertATFrist(67)
insertAtPos(30,3)
PrintData();

