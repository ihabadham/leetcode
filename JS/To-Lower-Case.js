/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // i know the ascii conversion way, but i don't give a damn
    // return s.toLowerCase();

    // ok fuck it let's do it
    let charArray = s.split('');

    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            const lowercaseCharCode = charCode + 32;
            charArray[i] = String.fromCharCode(lowercaseCharCode);
        }
    }

    return charArray.join('');
};