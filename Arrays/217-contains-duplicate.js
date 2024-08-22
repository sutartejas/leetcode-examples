// Time complexity: O(n)
// Space complexity: O(n)

function containsDuplicate(nums) {
    if (!nums.length) return false;
    const uniqueNums = new Set();
  
    for (const num of nums) {
      if (uniqueNums.has(num)) {
        return true;
      }
      uniqueNums.add(num);
    }
    return false;
  }
  
  const result = containsDuplicate([1, 2, 3, 1]);
  console.log(result); // true