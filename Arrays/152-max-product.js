function maxProduct(nums) {
    let ans = nums[0], maxp = nums[0], minp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], maxp * nums[i], minp * nums[i]);
        minp = Math.min(nums[i], maxp * nums[i], minp * nums[i]);
        maxp = temp;
        ans = Math.max(maxp, ans);
    }
    return ans;
}

const result = maxProduct([2, 3, -2, 4]);
console.log(result)