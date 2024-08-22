
function balancedStringSplit (s) {
    let balance = 0;
    let result = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "L") {
        balance++;
      }
      if (s[i] == "R") {
        balance--;
      }
  
      if (balance == 0) {
        result++;
      }
    }
    return result;
  };

const result = balancedStringSplit("RLRRLLRLRL")

console.log(result);