/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // this is basic mathematical addition
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();

    let i = 0;
    let rem = 0;
    let res = [];

    while (i < Math.min(num1.length, num2.length)) {
        let sum = 0;
        sum = parseInt(num1[i]) + parseInt(num2[i]) + rem;
        rem = sum > 9;
        sum = sum % 10;

        res.push(sum);
        i++;
    }

    while (i < num1.length) {
        let sum = 0;
        sum = parseInt(num1[i]) + rem;
        rem = sum > 9;
        sum = sum % 10;

        res.push(sum);
        i++;
    }

    while (i < num2.length) {
        let sum = 0;
        sum = parseInt(num2[i]) + rem;
        rem = sum > 9;
        sum = sum % 10;

        res.push(sum);
        i++;
    }

    if (rem) res.push(1);

    return res.reverse().join("");
};