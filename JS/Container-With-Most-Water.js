/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // ok two pointers
    let l = 0;
    let r = height.length - 1;
    let measure = (l, r, h) => (r - l) * h;
    let max = 0;

    while (l < r) {
        max = Math.max(max, measure(l, r, Math.min(height[l], height[r])));
        if (height[l] <= height[r]) { // Always move the pointer that points to the lower line. - this doesn't make any sense to me
            l = l + 1;
        } else {
            r = r - 1;
        }
    }

    return max;
};