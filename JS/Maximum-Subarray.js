/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // kadane's algorithm (dp) -> O(n)
    // we basically iterate over the array and update a running total and the maxS, if running total is negative we reset it
    // that way, say our array is [-1, -2, -3] -> answer would be -1
    let running = 0;
    let maxS = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        running += nums[i];
        maxS = Math.max(maxS, running);

        // if the new running is a negative value, we reset running to 0
        running = Math.max(running, 0);
    }

    return maxS;
};