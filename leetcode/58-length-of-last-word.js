//IN
//string as a parameter

//OUT
//integer value of the last element length

//find the length of the last word on a string and return it's length

const lengthOfLastWord = (s) => {
  const theWord = s.trim().split(" ")
  return theWord[theWord.length - 1].length
}