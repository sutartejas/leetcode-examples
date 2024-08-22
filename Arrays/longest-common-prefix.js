function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''; // Edge case: empty array
  
    let prefix = strs[0]; // Start with the first string as initial prefix
  
    for (let i = 1; i < strs.length; i++) {
      // Compare prefix with current string in the array
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1); // Reduce prefix length
        if (prefix === '') return ''; // No common prefix found
      }
    }
  
    return prefix;
  }
  
  // Example usage:
  const strings1 = ['flower', 'flow', 'flight'];
  console.log(longestCommonPrefix(strings1)); // Output: 'fl'
  
  const strings2 = ['dog', 'racecar', 'car'];
  console.log(longestCommonPrefix(strings2)); // Output: ''
  