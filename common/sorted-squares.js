function sortedSquares(nums) {
    const output = [];
    let left = 0;
    let right = nums.length - 1;
    let i = right;

    while (left <= right) {
        const leftSqr = nums[left] * nums[left];
        const rightSqr = nums[right] * nums[right];
        
        if (leftSqr > rightSqr) {
            output[i--] = leftSqr;
            left++;
        } else {
            output[i--] = rightSqr;
            right--;
        }
    }
    
    return output;
}

const result = sortedSquares([-7, -3, 2, 3, 11]);
console.log(result); // Expected output: [4, 9, 9, 49, 121]