/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // this is a classic stack problem
    // loop over s, if it's an open parenthesis, push to stack, if it's a closing one, check stack's top, if match, pop
    const stack = [];
    const openToCloseMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ]);

    const closeToOpenMap = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    function isOpenBracket(bracket) {
        return openToCloseMap.has(bracket);
    }

    function getOpeningPair(closingBracket) {
        return closeToOpenMap.get(closingBracket);
    }

    for (bracket of s) {
        if (isOpenBracket(bracket)) {
            stack.push(bracket);
        } else {
            if (stack.length === 0) return false;
            if (stack.at(-1) !== getOpeningPair(bracket)) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
};