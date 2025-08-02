/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const words = paragraph
        .toLowerCase()
        .replace(/[^a-z]+/g, ' ')
        .split(' ')
        .filter(word => word.length > 0);

    const bannedSet = new Set(banned);

    paragraph = words.filter(word => !bannedSet.has(word));
    
    const freq = new Map();

    for (const word of paragraph) {
        const currentCount = freq.get(word) || 0;
        freq.set(word, currentCount + 1);
    }

    let max = -1;
    let resWord;

    for (const [word, count] of freq) {
        if (count > max) {
            resWord = word;
            max = count;
        }
    }

    return resWord;
};