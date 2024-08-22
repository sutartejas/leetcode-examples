function countSubstrings(s) {
  let count = 0;

  function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          count++; // Increment count for every palindromic substring found
          left--;
          right++;
      }
  }

  for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i); // For odd length palindromes
      expandAroundCenter(i, i + 1); // For even length palindromes
  }

  return count;
}

// Example usage:
const s = "abc";
console.log(countSubstrings(s)); // Output: 3
