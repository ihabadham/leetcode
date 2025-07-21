/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lineCount = 1;
    let pixelCount = 0;
    const aCharCode = 'a'.charCodeAt(0);

    for (const char of s) {
        const charWidth = widths[char.charCodeAt(0) - aCharCode];

        if ((pixelCount + charWidth) > 100) {
            lineCount++;
            pixelCount = 0;
        }

        pixelCount += charWidth;
    }

    return [lineCount, pixelCount];
};