/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    // i can't believe i found a problem this easy on leetcode
    // classical freq array. we create an array of length 501 (upper bound of maximum possible value of arr[i]), fill it with 0's
    // iterate over arr, do arr[i]++ until the end
    // come back to freq, see if any item is freq[i] === i, return max = Math.max(max, freq[i])
    // if no lucky number found return -1
    let freq = new Array(501).fill(0);
    let maxL = 0;
    
    for (const num of arr) freq[num]++;

    for (let i = 1; i < freq.length; i++) {
        if (freq[i] === i) {
            maxL = Math.max(maxL, freq[i]);
        }
    }

    return maxL || -1;
};