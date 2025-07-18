/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // this can be done in one loop, but fuck it
    if (word === word.toLowerCase() || word === word.toUpperCase()) return true;

    const firstChar = word[0];
    const rest = word.slice(1);
    if (firstChar === firstChar.toUpperCase() && rest === rest.toLowerCase()) return true;

    return false;
};