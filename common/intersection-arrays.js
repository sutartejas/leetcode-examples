function intersection(nums1, nums2) {

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let output = [...set1].filter(x => set2.has(x))

    return output

};

function intersection2(nums1, nums2) {
    const countMap = {};
    const result = [];

    // Count occurrences of each number in nums1
    for (const num of nums1) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Iterate through nums2 and check for intersection
    for (const num of nums2) {
        if (countMap[num] > 0) {
            result.push(num);
            countMap[num]--; // Decrement count to avoid duplicates
        }
    }

    return result;
}

const result = intersection([1, 2], [2, 2]);
console.log(result);

const result2 = intersection2(nums1 = [1, 2], nums2 = [2, 2]);
console.log(result2)