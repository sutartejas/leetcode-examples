function sumWithoutPlus(a, b) {
    while (b !== 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
  
  console.log(sumWithoutPlus(5, 7)); // Output: 12

  
  function sumWithoutPlus(a, b) {
    return [a, b].reduce((acc, val) => {
      return acc - (-val);
    }, 0);
  }
  
  console.log(sumWithoutPlus(5, 7)); // Output: 12
  