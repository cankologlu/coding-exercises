// IN two non-negative integers as strings
// OUT return the sum of num1 and num2 as a string

//Rules: solve the problem without using any built-in library for handling large nums such as BigInt. Do not convert the inputs to integers directly


const addStrings = (num1, num2) => {
  if(num2.length > num1.length) {
    return addStrings(num2, num1);
  }

  let num1Array = num1.split('').reverse();
  let num2Array = num2.split('').reverse();

  let carry = 0;
  let result = [];

  for  (let i = 0; i < num1.length; i++ ) {

    let firstNumber = num1Array[i];
    let secondNumber = num2Array[i] ?? "0";

    let sum = parseInt(firstNumber) + parseInt(secondNumber) + carry;
    
    carry = 0;

    if (sum > 9) {
      sum %= 10;
      carry = 1
    }
    result.push(sum)
  }

  if(carry) {
    result.push(carry);
  }
  return result.reverse().join('')
}

let numOne = '456'
let numTwo = '77'

console.log(addStrings(numOne,numTwo))