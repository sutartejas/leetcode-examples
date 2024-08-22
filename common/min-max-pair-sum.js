function minPairSum(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize pointers for the start and end of the array
    let i = 0, j = nums.length - 1;

    // Initialize the maximum sum variable
    let maxSum = 0;

    // Iterate until the pointers meet
    while (i < j) {
        // Calculate the sum of the current pair
        const sum = nums[i] + nums[j];

        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(sum, maxSum);

        // Move the pointers towards each other
        i++;
        j--;
    }

    // Return the maximum sum of pairs
    return maxSum;
}

// Test the function
const result = minPairSum([3, 5, 5, 2, 4, 6]);
console.log(result); // Output: 11
