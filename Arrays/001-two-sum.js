
// Time complexity: O(n)
// Space complexity: O(n)

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};

function twoSum2(nums, target) {

    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if (obj[diff] !== undefined) {
            return [obj[diff], i]
        } else {
            obj[nums[i]] = i;
        }
    }
};

const result = twoSum2([1, 2, 3, 9], 12);
console.log(result); // [2, 3]