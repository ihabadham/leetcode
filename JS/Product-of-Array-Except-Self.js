/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // ok hear me out, we'll go prefix product (of prefix sum)
    // on each num we're on, we want the product of all the nums to its left multiplied by the product of all the nums to its right
    // to achieve this, we're create two extra cumulative arrays, one we multiply from the left and one from the right
    // so for each nums[i] we go left[i-1] * right[i+1]
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    left[0] = nums[0];
    right[0] = nums[0];
    left[left.length - 1] = nums.at(-1);
    right[right.length - 1] = nums.at(-1); // first and last nums of array stay the same

    for (let i = 1; i < nums.length - 1; i++) {
        left[i] = left[i-1] * nums[i];
        right[nums.length-i-1] = right[nums.length-i] * nums[nums.length-i-1];
    }

    let answer = new Array(nums.length);
    answer[0] = right[1];
    answer[answer.length-1] = left.at(-2);
    for (let i = 1; i < nums.length - 1; i++) {
        answer[i] = left[i-1] * right[i+1];
    }

    return answer;
};