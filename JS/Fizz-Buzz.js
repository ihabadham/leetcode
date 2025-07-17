/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const isDivisible = (x, y) => x % y === 0;

    const answer = new Array(n);

    for (let i = 1; i <= n; i++) {
        if (isDivisible(i, 3) && isDivisible(i, 5)) {
            answer[i-1] = "FizzBuzz";
        } else if (isDivisible(i, 3)) {
            answer[i-1] = "Fizz";
        } else if (isDivisible(i, 5)) {
            answer[i-1] = "Buzz";
        } else {
            answer[i-1] = i.toString();
        }
    }

    return answer;
};