function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const map = new Map();
  
  for (let end = 0; end < s.length; end++) {
      if (map.has(s[end])) {
          start = Math.max(map.get(s[end]) + 1, start);
      }
      map.set(s[end], end);
      maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}


//Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke" or "kew")