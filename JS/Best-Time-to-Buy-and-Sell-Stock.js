/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // thinking dp, without actually know how to implement it, general idea would be to loop over the array
    // and for each prices[i], try both skipping it and buying it and see what'll happen

    // i could use a hashmap for all days, for example for day 1 (price 7), store it in map with profit say -1
    // and while traversing the array, if i meet any price higher than 7, i update map[7]
    // but this way, i need to update all map items below today's price :(
    
    // i could keep two variables, one as keep and other as sell, and for each new price, if it's lower than keep
    // make it the new keep, else if it's higher than sell, make it the new sell, else skip.
    // if we reach the end and sell is not updated once, there is no profit
    // AFTER WRONG SUBMIT => failed at [2,4,1] output 3 expected 2
    // i shouldn't update keep after with a price after the selling price, hmmm
    // should i push the profit of (old-sell - old-keep) to an array, and then reset the sell and assign the new value to keep?
    // AFTER FIRST SUBMISSION => there is no need for a profits ARRAY, we only want a maxProfit variable to reassign
    let keep = prices[0];
    let sell = -1;
    let maxProfit = null;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < keep) {
            if (sell !== -1) {
                maxProfit = Math.max(maxProfit, sell - keep);
            }
            keep = prices[i];
            sell = -1;
        } else if (prices[i] > sell) {
            sell = prices[i];
        }
    }

    // in case of only one profit there is
    if (sell !== -1) {
        maxProfit = Math.max(maxProfit, sell - keep);
    }

    // get the maximum profit after multiple keeps and sells
    if (maxProfit === null) return 0; // no profit could be achieved

    return maxProfit;
};