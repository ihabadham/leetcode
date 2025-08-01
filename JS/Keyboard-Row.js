/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = [
        "qwertyuiop".split(""),
        "asdfghjkl".split(""),
        "zxcvbnm".split("")
    ];
    let res = [];

    for (const word of words) {
        const firstChar = word[0].toLowerCase();
        let whichRow = 0;

        if (rows[1].includes(firstChar)) {
            whichRow = 1;
        } else if (rows[2].includes(firstChar)) {
            whichRow = 2;
        }

        let flag = false;
        for (const char of word) {
            if (!rows[whichRow].includes(char.toLowerCase())) {
                flag = true;
                break;
            }
        }

        if (!flag) res.push(word)
    }

    return res;
};