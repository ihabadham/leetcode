/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    // 1. i could rotate s s.length times and each time compare it with goal
    // 2. i could iterate over s until i find the first character that matches the goal[0] rotate only then
    // const rotate = (str) => str.slice(1) + str.slice(0, 1);

    // let n = s.length;
    // while (n > 0) {
    //     if (s === goal) return true;
    //     s = rotate(s);
    //     n--;
    // }

    // return false;

    if (s.length !== goal.length) return false;
    if (s === goal) return true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[0]) {
            let rotatedS = s.slice(i) + s.slice(0, i);
            if (rotatedS === goal) {
                return true;
            }
        }
    }

    return false;
};