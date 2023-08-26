class Node {
  constructor(data) {
    this.data = data;
    this.left = null
    this.right = null
  }
}

let root = null;

function insert(data) {
  // console.log(root);
  root = insertRec(root, data);
  // console.log(root);
}

function insertRec(Root, data) {

  if (Root == null) {
    Root = new Node(data);
    return Root;
  }
  if (data < Root.data) {
    Root.left = insertRec(Root.left, data);
  }else {
    Root.right = insertRec(Root.right, data);
  }
  return Root;
}
 
function inorderRec(node) { 
  if (node != null) {
    inorderRec(node.left);
    console.log(node.data);
    inorderRec(node.right);
  }
}

function preorderRec(root) {
  if (root != null) {
    console.log(root.data);
    preorderRec(root.left);
    preorderRec(root.right);
  }
}

function postOrderRec(root) {
  if (root != null) {
    postOrderRec(root.left);
    postOrderRec(root.right);
    console.log(root.data);
  }
}

// driver code
insert(45)
insert(34)
insert(68)
insert(54)
insert(23)
insert(98)
insert(42)

// console.log(root.left.right.data
inorderRec(root)
// preorderRec(root);
// postOrderRec(root);