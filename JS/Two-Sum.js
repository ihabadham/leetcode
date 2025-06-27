/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nested loop over nums out from i and in from j = i + 1
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if ((nums[i] + nums[j]) === target) return [i, j]
    //     }
    // }

    // less that O(n2) approach
    // we create a hashmap, loop over the array
    // for each element, we do remainder = target - element, check if remainder in map, if it is, bingo
    // if it's not, we add element: index to map and keep looking
    // this way we loop over the array only once.
    let visited = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
        val = nums[idx];
        rem = target - val;
        if (visited.has(rem)) return [idx, visited.get(rem)];
        visited.set(val, idx);
    }
};