/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let result;
  let str1Array = Array.from(str1)
  let str2Array = str2.split('')

  // console.log(str1Array)
  // console.log(str2Array)

  // localeCompare methode sorts it by comparing without it sort method will sort it according to ASCII value and other approach is first convert it into lower or upper case
  str1Array = str1Array.filter(char => char !== ' ').sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })
  str2Array = str2Array.filter(char => char !== ' ').sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  // console.log(str1Array)
  // console.log(str2Array)

  sorted_str1 = str1Array.join('')
  sorted_str2 = str2Array.join('')

  if(sorted_str1.toLowerCase() === sorted_str2.toLowerCase()){
    result = true
  }else{
    result = false
  }

  // console.log(sorted_str1)
  // console.log(sorted_str2)

  return result
}

// console.log(isAnagram("ram","mar"))

module.exports = isAnagram;
