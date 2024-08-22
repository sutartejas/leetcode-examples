
// Time complexity: O(n logn)
// Space complexity: O(n)
function groupAnagrams(strs) {
    const anagramMap = new Map();
  
    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");

      if (anagramMap.has(sortedStr)) {
        anagramMap.get(sortedStr).push(str);
      } else {
        anagramMap.set(sortedStr, [str]);
      }
    }
  
    return [...anagramMap.values()];
  }
  
  const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.log(result);