function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Empty string is always breakable
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

// Example usage:
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true
