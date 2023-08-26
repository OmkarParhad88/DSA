

const prompt = require("prompt-sync")({ sigint: true });
let a = [];
for (let i = 0; i <= 1; i++) {
  let data = prompt("enter value ");
  if (a.length == 0) {
    a.push(data);
    // return;
    continue
  }
  // a[i]23
  let j = 0;
  while (data < a[j]) { 
    j++;
  }
  a.splice(j-1, 0,data)

  // a[j] = data;
}

console.log(a);