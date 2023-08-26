class Queue{
  constructor(){
  this.item = [];
  }

  enqueue(item) {
    console.log(item + " is put in queue.");
    return this.item.push(item);
  }

  dequeue() {
    return this.item.shift();
    console.log()
  }

  size() {
    return this.item.length;
  }

  print() {
    for (let i = 0; i < this.item.length; i++) {
      console.log(this.item[i]); 
    }
  }
}


let q = new Queue();
q.enqueue(78);
q.enqueue(48);
q.enqueue(8);
// q.dequeue();

q.print()
