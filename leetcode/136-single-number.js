//IN an array of integers contains elements appear twice but one 

//OUT the integer that appears only once


//challenges use constant extra space (this means space time complexitywise use only same array, or don't copy array)



const singleNumber = (nums) => {
  let objectNumbers = {}
  let lookingFor = 0;
  for(let i = 0; i < nums.length; i++){
    if(objectNumbers[nums[i]]) {
      objectNumbers[nums[i]] += 1;
      lookingFor -= nums[i];
    }
    else{
      objectNumbers[nums[i]] = 1;
      lookingFor += nums[i];
    }
  }
  return lookingFor
}

let testArrOne = [4,1,2,1,2]

console.log(singleNumber(testArrOne));