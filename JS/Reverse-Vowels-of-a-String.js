/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (vowels.includes(s[l].toLowerCase()) && vowels.includes(s[r].toLowerCase())) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        } else if (vowels.includes(s[l].toLowerCase())) {
            r--;
        } else if (vowels.includes(s[r].toLowerCase())) {
            l++;
        } else {
            l++;
            r--;
        }
    }

    return s.join("");
};