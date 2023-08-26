
function intrationBTS(arr, x) {
  let low = 0;
  let high = arr.length - 1
  while (low <= high) {
    
    let mid = Math.floor((low + high) / 2);
    if (x == arr[mid]) {
      return true;
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
// driver code
let a = [1, 4, 6, 12, 23, 34, 45, 56, 67,78,89,90,92,94,95,96]

// console.log(Math.floor((low + high) / 2))
let c = intrationBTS(a, 43)
if (c) {
  console.log("element is available in array");
} else {
  console.log("element is not available in array");
}