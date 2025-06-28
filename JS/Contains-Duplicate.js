/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // ok two idea are coming to mind first thought
    // 1. make a set of nums, compare it's length to the array's, if different then true else false
    // 2. a classic frequency array
    // i think 2 is better than 1 complexity wise, because we can early return in 2, 
    // whereas in 1 we've already done all the work
    const numSet = new Set(nums);
    return nums.length !== numSet.size;
};