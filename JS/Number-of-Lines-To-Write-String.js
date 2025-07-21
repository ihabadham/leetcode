/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lineCount = 1;
    let pixelCount = 0;

    for (const char of s) {
        if ((pixelCount + widths[char.charCodeAt(0) - 'a'.charCodeAt(0)]) > 100) {
            lineCount++;
            pixelCount = 0;
        }

        pixelCount += widths[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    return [lineCount, pixelCount];
};