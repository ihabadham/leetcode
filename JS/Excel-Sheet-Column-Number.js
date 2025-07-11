/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // basic conversion from base X to base 10
    const letterToNumber = (letter) => letter.charCodeAt(0) - 64;

    let res = 0;
    columnTitle = columnTitle.split("").reverse();

    for (let i = 0; i < columnTitle.length; i++) {
        res += letterToNumber(columnTitle[i]) * 26 ** i;
    }

    return res;
};