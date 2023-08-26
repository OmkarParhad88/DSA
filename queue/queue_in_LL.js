class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let length = 0;
let head = null;

function enqueue(data) {
  let newNode = new Node(data);

  if (head == null) {
    head = newNode;
    return;
  }

  let temp = head
  while (temp.next != null){
    temp = temp.next
  }
  temp.next = newNode; 
  length++;
}

function dequeue() {
  let temp = head;
  
  if (temp != null) {
    let elm = temp.data;
    temp = temp.next;
    head = temp;
    length--;
    return elm;
  }
}

function PrintData() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

enqueue(45);
enqueue(55);
enqueue(65);
dequeue();
PrintData();

