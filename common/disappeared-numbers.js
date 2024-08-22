function disappearedNumbers(nums) {
    const disappearedNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0) nums[index] = -nums[index]
    }
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > 0) {
            disappearedNumbers.push(i + 1)
        }
    }
    return disappearedNumbers;
};


var findDisappearedNumbers = function (nums) {
    const uniqueValues = new Set(nums);
    const result = [];
    for (let i = 1; i < nums.length; i++) {
        if (!uniqueValues.has(i)) {
            result.push(i);
        }
    }
    return result;
};


const result = disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))

console.log(result)