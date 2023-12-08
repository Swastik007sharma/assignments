/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    // Check if the category already exists in categoryTotals
    if (categoryTotals[category] === undefined) {
      // If not, initialize it with the current price
      categoryTotals[category] = price;
    } else {
      // If yes, add the current price to the existing total
      categoryTotals[category] += price;
    }
  }

  // Construct the result array directly during the iteration
  const result = [];
  for (const category in categoryTotals) {
    result.push({ category, totalSpent: categoryTotals[category] });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
