/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // this is classical base conversion
    // we basically convert from base 10 to base X by doing two ops iteratively
    // we dvide our number by the base to get an integer result, and take modulo to get remainder
    // repeat until division result is 0. answer is remainders bottom to top
    // AFTER SUBMIT: we can declare res as array instead of string to avoid it being recreated on every concat, but
    // since it won't be a really long string it's negligible.
    // but again, we're converting to array anyways to reverese, so might as well start with one

    const getCapitalLetter = (n) =>
        String.fromCharCode("A".charCodeAt(0) + n);


    let res = [];
    let rem = 0;

    while (columnNumber) {
        columnNumber--; // this is because we're converting to base 26 1-indexed and not 0-indexed like normal conversions. we're essentially converting from 1-based to 0-based so we can apply the normal algorithm
        rem = columnNumber % 26;
        res.push(getCapitalLetter(rem));
        columnNumber = Math.floor(columnNumber / 26);
    }

    return res.reverse().join("");
};