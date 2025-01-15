
const arr = [1, 2, 3, 4, 5];

function mySlice(arr, start = 0, end = arr.length) {

    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;
  
  
    start = Math.max(0, Math.min(start, arr.length));
    end = Math.max(0, Math.min(end, arr.length));
  
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
    return result;
}

console.log(mySlice(arr, 1, 3));
console.log(mySlice(arr, -3));

function myIndexOf(arr, item, from = 0) {
  
    if (from < 0) from = Math.max(0, arr.length + from);
  
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  }

console.log(myIndexOf(arr, 3));      
console.log(myIndexOf(arr, 3, 3));   
console.log(myIndexOf(arr, 6));

function myIncludes(arr, item, from = 0) {

    if (from < 0) from = Math.max(0, arr.length + from);
  
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return true;
    }
    return false;
  }

  console.log(myIncludes(arr, 3));      
  console.log(myIncludes(arr, 3, 3));   
  console.log(myIncludes(arr, 6));      