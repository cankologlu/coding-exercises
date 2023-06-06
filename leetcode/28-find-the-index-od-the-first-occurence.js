//IN
//two string parameters

//OUT
//index integer

//find the first occurence of a string in another string

const strStr = (haystack, needle) => {
  return haystack.indexOf(needle)
}


let haystackVar = "sadbutsad"
let needleVar = "sad"

console.log(strStr(haystackVar, needleVar))