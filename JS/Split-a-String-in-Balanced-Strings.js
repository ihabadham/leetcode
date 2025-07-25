/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lc = 0;
    let rc = 0;
    let balancedCount = 0;

    for (const char of s) {
        if (char === "R") {
            rc++;
        } else {
            lc++;
        }

        if (lc === rc) {
            balancedCount++;
            rc = 0;
            lc = 0;
        }
    }

    return balancedCount;
};