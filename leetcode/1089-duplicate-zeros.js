// IN a fixed length array of integers 
// OUT no value

// change the same array double the 0's keep the array same length

const duplicateZeros  = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i,0, 0);
      arr.pop();
      i++
    }
  }
}


arrOne = [1,0,2,3,0,4,5,0];

console.log(duplicateZeros(arrOne))