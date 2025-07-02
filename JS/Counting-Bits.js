/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // Brian Kernighan's algorithm.
    const countSetBits = (n) => {
        let count = 0;
        while (n !== 0) {
            n &= n - 1;
            count++;
        }
        return count;
    };

    const ans = new Array(n+1);
    for (let i = 0; i <= n; i++) {
        ans[i] = countSetBits(i);
    }

    return ans;
};