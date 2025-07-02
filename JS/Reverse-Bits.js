/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // is this a troll? don't i just reverese the string?
    function reverseAndCalculateTenthRep(uint32) {
        // convert the integer to a 32-bit binary string
        // fill the beginning with zeros in case the input had zeros to the left and were omitted
        const bitString = uint32.toString(2).padStart(32, "0"); 

        const reversedString = bitString.split("").reverse().join("");

        const decimalValue = parseInt(reversedString, 2);

        return decimalValue;
    }

    return reverseAndCalculateTenthRep(n);
};