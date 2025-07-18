/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.split("-").join("").toUpperCase();

    res = [];
    const remainder = s.length % k;
    let firstChunkLength = remainder === 0 ? k : remainder;
    res.push(s.slice(0, firstChunkLength));

    for (let i = firstChunkLength; i < s.length; i += k) {
        res.push(s.slice(i, i + k));
    }

    return res.join("-");
};