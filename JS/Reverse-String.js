/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // left and right pointers and swap
    // AFTER SUBMIT: we don't even need two pointers since r is just s.length - l - 1
    let l = 0;

    while (l < (s.length - l - 1)) {
        [s[l], s[s.length - l - 1]] = [s[s.length - l - 1], s[l]]
        l++;
    }
};