function rotateByPositions(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums;
};

function rotateByPositionsK(nums, k) {

    var reverse = function (nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++;
            end--;
        }
    }

    k = k % nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums;
};


const result = rotateByPositionsK([1, 2, 3, 4, 5, 6, 7], 3)

console.log(result);