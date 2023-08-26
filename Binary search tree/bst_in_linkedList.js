// Define a class for a binary search tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Define the insert method
function insert(val) {
  const newNode = new TreeNode(val);
  if (!root) {
    root = newNode;
    return this;
  }

  let current = root;
  
  while (true) {
    if (val === current.val) return undefined;
    console.log(current)
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
        return;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = newNode;
        return;
      }
      current = current.right;
    }
  }
}
// driver code
insert(10);
insert(5);
insert(15);
insert(2);
insert(7);
insert(12);
insert(17);
console.log(root)
