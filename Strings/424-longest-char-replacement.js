function characterReplacement(s, k) {
  const charCount = new Array(26).fill(0); // Count of each character
  let maxLength = 0; // Length of the longest substring
  let maxCount = 0; // Maximum count of a single character in the current window
  let start = 0; // Start index of the current window

  for (let end = 0; end < s.length; end++) {
      const charIndex = s.charCodeAt(end) - 65; // Get the index of the character in the count array
      maxCount = Math.max(maxCount, ++charCount[charIndex]); // Update maxCount with the count of the current character

      // If the number of replacements needed is more than k, shrink the window from the start
      if (end - start + 1 - maxCount > k) {
          charCount[s.charCodeAt(start) - 65]--; // Decrease count of the character at the start of the window
          start++; // Move the start of the window forward
      }

      maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length of the substring
  }

  return maxLength;
}

// Example usage:
const s = "ABAB";
const k = 2;
console.log(characterReplacement(s, k)); // Output: 4
