class Stack{

  constructor() {
    this.stackCont = [];
  }
  push(data) {
    this.stackCont.push(data)
    return this;
  }

  pop() {
    this.stackCont.pop()
    return this;
  }
}

const stackInstance = new Stack();
stackInstance.push("omkar");
console.log(stackInstance)
stackInstance.push("shreya");
console.log(stackInstance)
stackInstance.push("partiksh");
console.log(stackInstance)
stackInstance.push("prachi");
console.log(stackInstance)



