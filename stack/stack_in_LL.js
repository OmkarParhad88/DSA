
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let top = null;
let length = 0;

function isEmpty() {
  if (top == null && length == 0) {
    console.log ("stack is empty");
  } else { 
    console.log ("stack is not empty");
  }
}

function push(item) {
  let newNode = new Node(item);
  if (top == null) {
    top = newNode;
    length++;
    return;
  }
  let temp = top;
  top = newNode;
  top.next = temp;
  length++;
}

function pop() {
  top = top.next;
  length--;
}

function display() {
  let temp = top;
  do {
    console.log(temp.data);
    temp = temp.next;
  } while (temp != null);
  
  console.log("Stack length is "+ length)
}

function peek(pos) {
  if (pos >= length) {
    console.log("entered position is not valid  please put position under "+length)
    return length;
  }
  let temp = top;
  while (--pos) {
    temp= temp.next;
  }
  console.log(temp.data)
}

function size() {
  console.log("Size of Stack is "+ length) 
}

push(45);
push(55);
push(65);
// pop();
display();
