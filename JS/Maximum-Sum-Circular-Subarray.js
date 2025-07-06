/**
 * @param {number[]} nums
 * @return {number}
 *
 * This solution addresses the Maximum Subarray Sum Circular problem by considering two main cases:
 *
 * Case 1: The maximum subarray is a contiguous segment that does NOT wrap around the array ends.
 *         This is solved using the standard Kadane's algorithm to find the global maximum subarray sum.
 *
 * Case 2: The maximum subarray wraps around the array ends.
 *         If a subarray wraps around, the elements *not* included in it form a contiguous minimum subarray
 *         in the original array. Therefore, the sum of the wrapped subarray is (Total Sum of Array) - (Minimum Subarray Sum).
 *         The minimum subarray sum is found using a modified Kadane's algorithm.
 *
 * The final answer is the maximum of the sums from Case 1 and Case 2.
 *
 * Edge Case: If all numbers in the array are negative, the standard Kadane's (Case 1) will correctly
 *            identify the largest single negative number as the maximum sum. In this scenario,
 *            (Total Sum - Minimum Subarray Sum) would be 0 (if the minimum subarray is the entire array)
 *            or positive, which would be incorrect. This specific edge case is handled by returning
 *            the result from Case 1 directly if globalMax (from Kadane's) is negative, as it means
 *            no positive sum subarray exists.
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = 0;
    let currentMax = 0;
    let globalMax = Number.NEGATIVE_INFINITY;
    let currentMin = 0;
    let globalMin = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];

        currentMax += nums[i];
        globalMax = Math.max(globalMax, currentMax);
        if (currentMax < 0) {
            currentMax = 0;
        }

        currentMin += nums[i];
        globalMin = Math.min(globalMin, currentMin);
        if (currentMin > 0) {
            currentMin = 0;
        }
    }

    if (globalMax < 0) {
        return globalMax;
    }

    return Math.max(globalMax, totalSum - globalMin);
};