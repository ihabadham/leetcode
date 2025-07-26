/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    function zip(words) {
        const charArrays = words.map((word) => Array.from(word));
        const longestLength = Math.max(...charArrays.map((arr) => arr.length));

        return Array.from({ length: longestLength }).map((_, i) =>
            charArrays.map((arr) => (arr[i] !== undefined ? arr[i] : ' ')),
        );
    }

    const words = s.split(" ");

    const vWords = zip(words);

    for (let i = 0; i < vWords.length; i++) {
        vWords[i] = vWords[i].join("").trimEnd();
    }

    return vWords;                     
};