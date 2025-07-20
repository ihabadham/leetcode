/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    // boolean array to mark precense
    const isJewel = new Array(128).fill(false);
    for (const stone of jewels) {
        isJewel[stone.charCodeAt(0)] = true;
    }

    let count = 0;
    for (const stone of stones) {
        if (isJewel[stone.charCodeAt(0)]) {
            count++;
        }
    }

    return count;
};