//IN 
//An array of integers and a target value integer

//OUT
//Index integer

//Process: loop through the array, find the location of the target value increasing order, if same find the previous location


const searchInsert = (nums, target) => {
  let index = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      
      index = i;
    } if(
      target > nums[i] && target < nums[i + 1]
    ) {
      
      index = i + 1;
      
    } if (i === nums.length-1 && target > nums[nums.length-1]) {
      index = nums.length;
    }
  }
  return index;
}