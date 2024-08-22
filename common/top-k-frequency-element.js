
// Time complexity: O(n)
// Space complexity: O(n)
function topKFrequent(nums, k) {
    const frequencyMap = new Map();
  
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    const result = [];
    for (const [num, frequency] of frequencyMap) {
      if (frequency >= k) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  const result = topKFrequent([1, 1, 1, 2, 2, 3], 1);
  console.log(result);