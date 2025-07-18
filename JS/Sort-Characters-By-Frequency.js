/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const getCharFrequency = (str) => {
        const freq = {};
        for (const char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
        return Object.entries(freq).sort((a, b) => b[1] - a[1]);
    };

    const freq = getCharFrequency(s);
    const ans = [];
    
    freq.forEach(([char, count]) => {
        ans.push(char.repeat(count));
    })

    return ans.join("");
};