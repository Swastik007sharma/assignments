/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
// str = 'Hello, world!'
function countVowels(str) {
  let count = 0
  vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase()
  str = Array.from(str)
  // console.log(str)

  str = str.filter(char => /[aeiou]/i.test(char))
  // console.log(str)
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])){
      count++
    }
  }
  return count
}

// countVowels(str)

module.exports = countVowels;