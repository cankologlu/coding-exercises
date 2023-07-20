//IN two array of integers
//OUT an array of integers of the intersecting numbers

// each element has to be unique


numsOne = [4,9,5], numsTwo = [9,4,9,8,4]
// Time Complexity O(n^2)

/*const intersection = (nums1, nums2) => {
  let intersecting = [];
  nums1.forEach((num) => nums2.find((num1) => {if(num === num1 && !intersecting.includes(num)){
    intersecting.push(num)
  }}))
  return intersecting;
}*/

// Time Complexity O(n+m)
const intersection = (nums1, nums2) => {
  let intersecting = [];
  let seen = {}; 

  nums1.forEach((num) => {
    seen[num] = true;
  });

  nums2.forEach((num) => {
    if (seen[num]) {
      intersecting.push(num);
      delete seen[num]; 
    }
  });

  return intersecting;
};


console.log(intersection(numsOne,numsTwo));