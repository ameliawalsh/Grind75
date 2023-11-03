// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//input array of prices price of stock on ith day == prices[i]

//buy date has to be before the sell date

function buySell(prices){
    let maxOutput = 0;

    while(prices.length){
        let buyPrice = prices.shift()
        for(i = 0; i < prices.length; i++){
            maxOutput =  Math.max(maxOutput, (prices[i] - buyPrice))
            difference = prices[i] - buyPrice
        }
    }
    console.log(maxOutput)
    return maxOutput
}


buySell([7,1,5,3,6,4])
buySell([7,6,4,3,1])