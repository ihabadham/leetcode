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

    // AFTER SECOND SUBMIT => according to: https://www.youtube.com/watch?v=1pkOgXD63yU
    // why do we need to only conditionally change the sell ponter when we could always move it to the right
    // and only measure and update the keep when it's not profitable?
    let keep = 0;
    let sell = 1;
    let maxProfit = 0;

    while (sell < prices.length) {
        if (prices[keep] < prices[sell]) { // it's profitable to sell
            maxProfit = Math.max(maxProfit, prices[sell] - prices[keep]);
        } else { // sell is lower than keep, so keep becomes sell as the lowest price to buy
            keep = sell;
        }
        sell = sell + 1;
    }

    return maxProfit;
};