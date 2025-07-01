/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // ok so we iterate over until n is 0, each time we n & 1 and then unsigned right shift by 1 => n >>>= 1
    let setcount = 0;

    while (n > 0) {
        let andop = n & 1;
        if (andop > 0) {
            setcount = setcount + 1;
        }
        n >>>= 1;
    }

    return setcount;
};