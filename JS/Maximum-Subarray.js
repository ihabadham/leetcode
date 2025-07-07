/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // kadane's algorithm (dp) -> O(n)
    // we basically iterate over the array and update a running total and the maxS, if running total is negative we reset it
    // that way, say our array is [-1, -2, -3] -> answer would be -1
    // let running = 0;
    // let maxS = Number.NEGATIVE_INFINITY;

    // for (let i = 0; i < nums.length; i++) {
    //     running += nums[i];
    //     maxS = Math.max(maxS, running);

    //     // if the new running is a negative value, we reset running to 0
    //     running = Math.max(running, 0);
    // }

    // return maxS;

    // -----------------------------------------------------------------------------------

    // divide and conquer. cc https://www.youtube.com/watch?v=yBCzO0FpsVc
    // ok so we divide an array in two halves, left and right. and we have three scenarios
    // 1. left half has the complete answer, so we calculate max left half subarray sum
    // 2. right half has it, so we do the same for right half
    // 3. answer subarray crosses the middle, so we compute the maximum subarray sum start from mid and going both dirs
    // keeping track of the maximum sum on left and on right, and also max indices
    function maxCrossSub(arr, mid) {
        let leftSum = -Infinity;
        let currentSum = 0;
        for (let i = mid - 1; i >= 0; i--) {
            currentSum += arr[i];
            leftSum = Math.max(leftSum, currentSum);
        }

        let rightSum = -Infinity;
        currentSum = 0;
        for (let i = mid; i < arr.length; i++) {
            currentSum += arr[i];
            rightSum = Math.max(rightSum, currentSum);
        }

        return leftSum + rightSum;
    }
    
    function maxsub(arr) {
        if (arr.length <= 1) {
            return arr[0];
        }

        const mid = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        const maxLeft = maxsub(leftHalf);
        const maxRight = maxsub(rightHalf);
        const maxCross = maxCrossSub(arr, mid);

        return Math.max(maxLeft, maxRight, maxCross);
    }

    return maxsub(nums);
};