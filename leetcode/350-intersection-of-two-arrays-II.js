

const intersect = (nums1, nums2) => {
  let obj1 = {};
  let obj2 = {};
  let whichNum = [];
  let howMany = [];
  let finalArray = [];

  for (let num of nums1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }

  for (let num of nums2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (obj1[num] && obj2[num] && !whichNum.includes(num)) {
      if (obj1[num] < obj2[num]) {
        howMany.push(obj1[num]);
      } else {
        howMany.push(obj2[num]);
      }
      whichNum.push(num);
    }
  }

  for (let i = 0; i < howMany.length; i++) {
    finalArray.push(...Array.from({ length: howMany[i] }, () => whichNum[i]));
  }

  return finalArray;
};

const numsOne = [4, 9, 5];
const numsTwo = [9, 4, 9, 8, 4];
console.log(intersect(numsOne, numsTwo));