
// binary search tree for array in recursion method.

function recursionBTS(arr, x, start, end) {
  if (start > end) {
    return false;
  } else {
    let mid = Math.floor((start + end) / 2);
    if (x == arr[mid]) {
      return true;
    } else if (x > arr[mid]) {
      return recursionBTS(arr, x, (mid + 1), end);
    } else {
      return recursionBTS(arr, x, start, (mid - 1));
    }
  }
}
let a = [1, 4, 6, 12, 23, 34, 45, 56, 67];
let low = 0;
let high = a.length - 1;

let c = recursionBTS(a, 55, low, high)
if (c) {
  console.log("element is available in array");
} else {
  console.log("element is not available in array");
}