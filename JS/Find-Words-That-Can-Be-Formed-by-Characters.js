/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    // create a hashmap of chars and for each word check if all letters in it are in chars
    const charsMap = new Map();
    for (const char of chars) {
        charsMap.set(char, (charsMap.get(char) || 0) + 1);
    }

    let resLength = 0;
    for (const word of words) {
        const cm = new Map(charsMap);
        let flag = false;
        for (let i = 0; i < word.length; i++) {
            if (!cm.has(word[i]) || cm.get(word[i]) < 1) {
                flag = true;
                break;
            }
            cm.set(word[i], cm.get(word[i]) - 1);
        }

        if (!flag) {
            resLength += word.length;
        }
    }

    return resLength;
};