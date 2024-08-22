function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
};

const result = removeDuplicates([0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8]);
console.log(result)