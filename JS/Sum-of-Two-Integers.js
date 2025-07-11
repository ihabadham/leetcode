/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // xor does addition without carry
    // to get all poisitions where carry is generated (where the bits are 1) we do AND
    // so for example 0011 + 0011 => XOR is 0000, AND is 0011, we shift the AND value to left by one because carry of
    // ith bit is applied to i+1th, right? so 1 << 0011 is 0110
    // now do XOR with that and then AND and see if this creates carries as well, if yes keep going, if no we're done
    // now if say b is negative, we got a fucking two's complement in our hand where -b is ~b+1 so it invloves addition
    // but good news is, JavaScript's bitwise ops natively handle negatives in two's complement, so our add function 
    // already takes care of them. No extra conversion needed
    function add(a, b) {
        while (b !== 0) {
            const carry = (a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        return a;
    }

    return add(a, b);
};