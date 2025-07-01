/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1. first thought that came to mind was sorting the two strings and compare.
    // but i guess this complicates things if unicode characters are involved.
    // 2. another approach is storing one of the strings' characters into some log(1) search data structure
    // and loop over the other string and check for each s[i].
    // but that get weird with repeated characters.
    // 3. another thought would be to create a classic freq map of all characters of a string, and loop over the other
    // and check the map, if count is > 1 we --1 and continue, else false.
    // AFTER WRONG SUMBIT => s = "a", t = "ab", output true, expected false
    // we didn't check if both strings are equal :(
    if (s.length !== t.length) return false; // this also handles if s = "a" and t = "aaaaa"

    const tLetterFrequencies = new Map();
    for (const letter of t) {
        currentCount = tLetterFrequencies.get(letter) || 0;
        tLetterFrequencies.set(letter, currentCount+1);
    }

    for (const letter of s) {
        currentCount = tLetterFrequencies.get(letter) || 0;
        if (currentCount < 1) return false;
        tLetterFrequencies.set(letter, currentCount-1);
    }

    return true;
};