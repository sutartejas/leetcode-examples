
// Time complexity: O(n logn)
// Space complexity: O(n)
function maxSubArray(nums) {
    let maxSubArr = 0;
    for (let i = 0; i < nums.length; i++) {
        let sumArr = 0;
        for (let j = i; j < nums.length; j++) {
            sumArr = sumArr + nums[j];
            maxSubArr = Math.max(sumArr, maxSubArr)
        }
    }
    return maxSubArr
}
//K-dane's Algorithm:
function maxSubArray2(nums) {
    let maxSubArr = nums[0];
    let sumArr = 0;
    for (let i = 0; i < nums.length; i++) {
        sumArr = sumArr + nums[i];
        maxSubArr = Math.max(sumArr, maxSubArr)
        if (sumArr < 0) sumArr = 0;
    }
    return maxSubArr
}
const result = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);