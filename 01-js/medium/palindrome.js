/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = Array.from(str).filter(char => /[a-z]/i.test(char)).join('')
  // console.log(str)
  let strArray = Array.from(str.toLowerCase()).filter(char => /[a-z]/.test(char))
  // console.log(strArray)
  let strReverseArray = []
  for(let i = strArray.length-1; i >= 0; i--){
    strReverseArray.push(strArray[i])
  }
  strReverse = strReverseArray.join('')
  // console.log(strReverse)
  if(str.toLowerCase() == strReverse){
    return true;
  }else {
    return false;
  }
}

// console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
