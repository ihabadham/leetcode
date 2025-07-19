/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // i know the ascii conversion way, but i don't give a damn
    // return s.toLowerCase();

    // ok fuck it let's do it
    function convertCharAtIndex(str, index) {
        const char = str[index];
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            const lowercaseCharCode = charCode + 32;
            const lowercaseChar = String.fromCharCode(lowercaseCharCode);
            return str.substring(0, index) + lowercaseChar + str.substring(index + 1);
        } else {
            return str;
        }
    }

    for (let i = 0; i < s.length; i++) {
        s = convertCharAtIndex(s, i);
    }

    return s;
};