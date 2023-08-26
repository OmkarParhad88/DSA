class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

let last = null;

function addEmpty(data) {
  if (last != null) {
    console.log("list is not empty")
    return;
  }
  last = new Node(data);
  last.next = last
  return;
}

function addBegin(data) {
  if (last == null) {
    addEmpty(data);
    return
  }
  let temp = new Node(data);
  temp.next = last.next;
  last.next = temp;
  return;
}

function addEnd(data) {
  if (last == null) {
    addEmpty(data)
    return;
  }
  let temp = new Node(data);
  temp.next = last.next;
  last.next = temp
  last = temp
}

function addAfter(data, itam) {
  if (last == null) {
    console.log("list is empty")
    return;
  }
  let temp, trav;
  trav = last.next
  do {
    if (trav.data == itam) {
      temp = new Node(data);
      temp.next = trav.next
      trav.next = temp;
      if (trav == last) {
        last = temp;
        return;
      }
    }
    trav = trav.next
  } while (trav != last.next);
}

function display() {
  if (last == null) {
    console.log("list is empty")
    return;
  }
  let trav = last.next;
  do {
    console.log(trav.data);
    trav = trav.next;
  } while (trav != last.next);
}

function display2() {
  if (last == null) {
    console.log("list is empty")
    return;
  }
  let temp = last.next;
  while (temp != last) {
    console.log(temp.data)
    temp = temp.next;
  }
  console.log(temp.data)
}

// driver code
addEmpty(6);
addEnd(54);
// addEnd(34);
// addEnd(56);
// addEnd( 45)
// addAfter(23, 54)
display2();