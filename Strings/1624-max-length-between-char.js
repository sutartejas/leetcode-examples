function maxLengthBetweenEqualCharacters(s) {
    const firstOccurrence = {};
    let maxLength = -1;
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char in firstOccurrence) {
        const length = i - firstOccurrence[char] - 1;
        maxLength = Math.max(maxLength, length);
      } else {
        firstOccurrence[char] = i;
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const s = "acba";
  console.log(maxLengthBetweenEqualCharacters(s)); // Output: 2
  