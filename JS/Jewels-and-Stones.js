/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const lookupSet = new Set();
    for (const stone of jewels) {
        lookupSet.add(stone);
    }

    let count = 0;
    for (const stone of stones) {
        if (lookupSet.has(stone)) {
            count++;
        }
    }

    return count;
};