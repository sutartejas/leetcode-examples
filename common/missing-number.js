// Time complexity: O(n)
// Space complexity: O(n)

function missingNumber(nums) {
    const n = nums.length + 1;
    const SumOfNumbers = (n * (n + 1)) / 2;

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }

    return (SumOfNumbers - sum)
}

const result = missingNumber([1, 2, 4, 6, 3, 7, 8]);
console.log(result); 