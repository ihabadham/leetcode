/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // AFTER WROMG SUBMISSIONS, turns out the answer is very simple
    nums.sort((a, b) => {
        const sA = String(a);
        const sB = String(b);

        const concatAB = sA + sB;
        const concatBA = sB + sA;

        if (concatBA > concatAB) {
            return 1;
        }
        if (concatBA < concatAB) {
            return -1;
        }
        return 0;
    });

    if (nums[0] === 0) return "0"; // avoid [0, 0] returning "00" where the expected is just "0"

    return nums.join("");
};