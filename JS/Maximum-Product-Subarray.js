/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // we go sliding windows starting from first num, we're at nums[i], we multiply, if result > max we update max
    // if result < max that means nums[i] is negative, we save the negative value to some variable, we reset the l pointer
    // to i+1 and start a new subarray, if new result is a negative value again, we see if we already have a negative value
    // in our negative variable, if we do we connect the subarrays, if we don't we store the negative value to the variable and so on.
    // if we find a zero, we reset the negative variable to null
    // AFTER WRONG SUBMIT => input is [-2] output is 0 expected is -2: forgot to handle arrays of length 1 :(
    // appears we're approaching this wrong. cc nums = [2,-5,-2,-4,3]
    // if (nums.length === 1) return nums[0]

    // let maxP = 0;
    // let runningP = 1;
    // let negsub = null;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         negsub = null;
    //         if (maxP !== 0) {
    //             maxP = Math.max(maxP, runningP);
    //         }
    //         runningP = 1;
    //         continue;
    //     }

    //     runningP = runningP * nums[i];
    //     if (runningP < 0) {
    //         if (!negsub) { // there is no previous negative result subarray to connect
    //             negsub = runningP;
    //             runningP = 1;
    //             continue;
    //         } else {
    //             runningP = runningP * negsub;
    //             negsub = null;
    //         }
    //     }

    //     maxP = Math.max(maxP, runningP);
    // }

    // return maxP;

    // ------------------------------------------------------
    // - A new max_so_far could be nums[i], max_so_far * nums[i], or min_so_far * nums[i]. Why the min_so_far?
    // - A new min_so_far could be nums[i], max_so_far * nums[i], or min_so_far * nums[i].
    // Think about what happens when you multiply by a negative number. cc https://www.youtube.com/watch?v=b_8pqvT0pdE
    let maxP = Math.max(...nums); // for arrays with just one item. eg. nums[-10]
    let max_so_far = 1;
    let min_so_far = 1;

    for (const num of nums) {
        let temp_max = max_so_far;

        max_so_far = Math.max(num, temp_max * num, min_so_far * num);
        min_so_far = Math.min(num, temp_max * num, min_so_far * num);

        maxP = Math.max(maxP, max_so_far);
    }
    
    return maxP;
};