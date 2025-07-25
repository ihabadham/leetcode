/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const freq = new Map();

    for (const c of s) {
        freq.set(c, (freq.get(c) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};