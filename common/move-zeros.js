function moveZerosToBeginning(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap zero element with the element at insertPos
            [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
            insertPos++;
        }
    }

    return nums;
}

const result = moveZerosToBeginning([1, 1, 0, 1, 2, 0, 0, 3, 0, 4, 0]);
console.log(result); // Output: [0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 4]
