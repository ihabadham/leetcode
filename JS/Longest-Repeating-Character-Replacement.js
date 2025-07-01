/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // ok we create a count map of all the alphabet letters, and keep a sliding window of two pointers moving over s
    // and each time, we check (longest count of the same letter - the sum of all the others) and if the sum of all the others
    // is k, we found a new substrings, update the max var and keep going. if not, we move left by one and redo
    if (s.length < 2) return s.length;

    function createAlphabetCountMap() {
        const countMap = new Map();
        for (let i = 0; i < 26; i++) {
            countMap.set(String.fromCharCode(65 + i), 0);
        }
        return countMap;
    }

    function getHighestCountAndOthersSum(countsMap) {
        let highestCount = -1;
        let totalSum = 0;

        for (const [letter, count] of countsMap) {
            totalSum += count;
            if (count > highestCount) {
                highestCount = count;
            }
        }
        return totalSum - highestCount;
    }

    function decreaseCount(countsMap, letter) {
        const currentCount = countsMap.get(letter);
        if (currentCount <= 0) {
            return false;
        }
        countsMap.set(letter, currentCount - 1);
        return true;
    }

    function increaseCount(countsMap, letter) {
        const currentCount = countsMap.get(letter);
        countsMap.set(letter, currentCount + 1);
        return true;
    }

    const cmap = createAlphabetCountMap();
    let maxS = k || 1; // if k = 0 and s is ABAB, we want to return 1 and not the default 0
    let l = 0;
    let r = 1;
    cmap.set(s[l], 1);
    cmap.set(s[r], cmap.get(s[r])+1); // hanlde when first two letters are the same letter

    while (r < s.length) {
        let diff = getHighestCountAndOthersSum(cmap);
        if (diff <= k) {
            maxS = Math.max(maxS, r - l + 1);
        } else {
            decreaseCount(cmap, s[l]);
            l = l + 1;
        }
        r = r + 1;
        increaseCount(cmap, s[r]);
    }

    return maxS;
};