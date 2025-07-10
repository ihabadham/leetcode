/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    // i can't believe i found a problem this easy on leetcode
    // classical freq array. we create an array of length 501 (upper bound of maximum possible value of arr[i]), fill it with 0's
    // iterate over arr, do arr[i]++ until the end
    // come back to freq, see if any item is freq[i] === i, return max = Math.max(max, freq[i])
    // if no lucky number found return -1
    // let freq = new Array(501).fill(0);
    // let maxL = 0;

    // for (const num of arr) freq[num]++;

    // for (let i = 1; i < freq.length; i++) {
    //     if (freq[i] === i) {
    //         maxL = Math.max(maxL, freq[i]);
    //     }
    // }

    // return maxL || -1;

    // --------------------------------------------------------------------------------------------

    // another appraoch would be counting, without using a freq array. 
    // since array element order doesn't count, we can just sort the array descendingly, move two pointers l and r
    // and count the similar items
    // AFTER WRONG SUBMIT: what a bad early return condition i have made :(
    // AFTER CORRECT SUBMIT: we don't really need the count variable, we can derive it from r and l
    arr.sort((a, b) => b - a);
    let l = 0;
    let r = 1;

    while (r < arr.length) {
        if (arr[r] !== arr[l]) {
            if (r - l === arr[l]) {
                return r - l; // we don't have to keep looking, this is lucky, and because of the sort, this is max
            }

            l = r;
            count = 1;
        }

        r = r + 1;
    }

    if (r - l === arr[l]) return r - l;

    return -1;
};