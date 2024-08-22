function longestPalindrome(s) {
  if (s.length === 0) return "";

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          const currentLength = right - left + 1;
          if (currentLength > maxLength) {
              start = left;
              maxLength = currentLength;
          }
          left--;
          right++;
      }
  }

  for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i); // odd length palindrome
      expandAroundCenter(i, i + 1); // even length palindrome
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
const s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"
