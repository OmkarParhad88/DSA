// to impliment singly linked lists and

class llNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// class linked list
class linkedList {
  constructor() {
    this.head = null
  }
  create(data) {
    // create a new node
    let newNode = new llNode(data);

    // special case no itms the list yet
    if (this.head == null) {
      this.head = newNode;
    }
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
        // console.log(current)
      }
      current.next = newNode;
    }
  }

  display() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      let current = this.head;
      while (current != null) {
        console.log(current.data);
        current = current.next;
      }
      console.log(current);
    }
  }

  insertFront(data) {
    let newNode = new llNode(data);
    let l = this.head;
    this.head = newNode
  }
  // insertEnd(data) {
  //   let newNode = new llNode(data);
  //   newNode.next = this.head;
  //   this.head = newNode

  //   while (l.next != null) {
  //     l=l.next;
  //   }
  //   l.next = newNode;
  //   newNode.next = null;
  // }

  insetinBetween(data, pos) {
    let newNode = new llNode(data);
     let l = this.head;
    this.head = newNode;
    for (let i = 1; i < pos-1 && l.next !=null; i++) {
      l = l.next;
      newNode.next = l.next
      l.next = newNode

    }
  }
  // delFront() {
  //   console.log("the element deleted is  :", this.head.data);

  // }
  // delEnd() {
  //   let p = this.head;
  //   while (p.next != null) {
  //     var q = p;
  //     p = p.next;
  //   }
  //   q.next = null;
  //   console.log("the element deleted is :", p.data);
  // }
  // delBetween(pos) {
  //   let p = this.head;
  //   for (let i = 1; i < pos && p != null; i++) {
  //     var q = p;
  //     p=p.next;
  //   }
  //   q.next = p.next;
  // }
}

const list = new linkedList();
list.create(50);
list.create(30);
list.create(10);
list.create(40);
list.create(80);
// list.insetinBetween(45,3)
// list.insertFront(34)
list.display();

