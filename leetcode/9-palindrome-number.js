const isPalindrome = function(x) {
    let array = [];
   y = x.toString()
    for(i = y.length - 1; i > -1 ; i--) {
      array.push(y[i])
  } 
    if(array.join("") === y) {
      return true;
    }else {
      return false
    }
};

let x = 121;

isPalindrome(x)