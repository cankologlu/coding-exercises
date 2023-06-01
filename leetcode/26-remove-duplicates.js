//IN
//Takes in an array on numbers

//OUT
//An array with numbers showing only once in the same order

const removeDuplicates = (nums) => {
  let obj = {};
  for (number in nums) {
    if (!obj[nums[number]]) {
      obj[nums[number]] = nums[number];
    }
  }
  let result = Object.values(obj).sort((a, b) => a - b);
  let k = result.length;
  console.log(result);
  for (let i = result.length - 1; i > -1; i--) {
    nums.unshift(result[i]);
  }

  return k;
};

const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(numbers));
