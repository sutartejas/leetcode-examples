// Time Complexity : O(n)
// Space Complexity: O(n)

function shuffle(nums, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n])
    }
    return res
};

const result = shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4)
console.log(result)