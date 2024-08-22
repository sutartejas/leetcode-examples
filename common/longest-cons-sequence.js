function longestConsecutiveUnSort(nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b); // Sort the array

    let max = 1;
    let currMax = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            currMax++;
        } else if (nums[i] !== nums[i - 1]) {
            currMax = 1;
        }

        max = Math.max(max, currMax);
    }

    return max;
}

const result = longestConsecutiveUnSort([100, 4, 200, 1, 3, 2]);
console.log(result);