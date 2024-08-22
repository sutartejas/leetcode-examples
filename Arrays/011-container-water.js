function maxArea(nums) {
    let result = 0; i = 0, j = nums.length - 1;

    while (i < j) {
        result = Math.max(result, Math.min(nums[i], nums[j]) * (j - i)) // area = l * b
        nums[i] <= nums[j] ? i++ : j--
    }
    return result;
};

const result = maxArea([ 3, 1, 2, 4, 5 ])

console.log(result)