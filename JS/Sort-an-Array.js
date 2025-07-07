/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // classic merge sort
    // AFTER MERGE SORT SUBMIT -> we can reduce space use in merge() by passing the array and overwriting it instead
    // of formulating a new result[]
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);

        merge(sortedLeft, sortedRight, arr);
        return arr;
    }

    function merge(left, right, arr) {
        let leftIndex = 0;
        let rightIndex = 0;
        let arrIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                arr[arrIndex] = left[leftIndex];
                leftIndex++;
            } else {
                arr[arrIndex] = right[rightIndex];
                rightIndex++;
            }
            arrIndex++;
        }

        while (leftIndex < left.length) {
            arr[arrIndex] = left[leftIndex];
            leftIndex++;
            arrIndex++;
        }

        while (rightIndex < right.length) {
            arr[arrIndex] = right[rightIndex];
            rightIndex++;
            arrIndex++;
        }
    }

    return mergeSort(nums);
};