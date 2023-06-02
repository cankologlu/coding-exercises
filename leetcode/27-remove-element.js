//IN
//an array of integers and an integer

//OUT
//an integer equal to the length of the remaining numbers

//check for the val in the array
//mutate array where val 
//return the number of elements in the array without val

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++)  {
    if(nums[i] === val) {
      nums.splice(i,1);
     --i;
    }
  }
  console.log(nums)
  return nums.length;
}

const numbers = [3,2,3,3,2,3];
const value = 3;

console.log(removeElement(numbers, value))