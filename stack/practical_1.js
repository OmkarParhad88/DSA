// javascript program to implement basic stack operations
// date 

let t = -1;
let max = 100;
let a =[];

// verify top element is empty

function isEmpty() {
  if (t < 0) {
    console.log("STack is empty")
  } else {
    console.log("Stack has element ")
  }
}

// perform push operation and also verify weather stack is full

function push(x) {
  if (t >= (max - 1)) {
    console.log("Stack Overflow");
  } else {
    t++;
    a[t] = x;
    console.log(x);
    return true;
  }
}

function popo() {
  if (t < 0) {
    console.log("Stack is underflow");
    return 0;
  } else {
    let x =a.pop();
    t--;
    return x ;
  }
}

function peek() {
  if (t < 0) {
    console.log("Stack is underflow");
    return 0;
  } else {
    let x =a[t];
    return x;
  }
}

function print() {
  for (let i = 0; i <= t; i++) {
    console.log(" " + a[i]);
  }
}

console.log("Your program output is");
push(100);
push(200);
push(800);
push(300);
console.log()
// console.log(a)
console.log("top element is " + peek());
console.log(popo() + "popped from stack");
console.log("Element persent is stack");
print();