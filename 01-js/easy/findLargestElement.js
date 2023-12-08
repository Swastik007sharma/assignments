/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
let input = [-15, -27, -8, -12]

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i]
        }
    }
    return largestNumber;
}

// console.log(findLargestElement(input))

module.exports = findLargestElement;