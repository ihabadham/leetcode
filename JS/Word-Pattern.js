/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let follower = new Map();
    let followedBy = new Map();

    for (let i = 0; i < words.length; i++) {
        if (follower.has(words[i])) {
            if (follower.get(words[i]) !== pattern[i]) return false;
        } else if (followedBy.has(pattern[i])) {
            if (followedBy.get(pattern[i]) !== words[i]) return false;
        } else {
            follower.set(words[i], pattern[i]);
            followedBy.set(pattern[i], words[i]);
        }
    }

    return true;
};