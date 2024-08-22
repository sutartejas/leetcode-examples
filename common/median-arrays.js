function findMedianSortedArrays(nums1, nums2) {
    const nums = nums1.concat(nums2);
    nums.sort((a, b) => a - b);

    const mid = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    } else {
        return nums[mid];
    }
}

function medianOfSingleArray(arr) {
    const len = arr.length;
    if (len === 0) return null; // Handle empty array

    const mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

// Example usage:
console.log(medianOfSingleArray([1, 2, 3])); // Output: 2
console.log(medianOfSingleArray([1, 2, 3, 4])); // Output: 2.5

const result = findMedianSortedArrays([1, 3], [2, 4]);
console.log(result); // Output: 2.5
