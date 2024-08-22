// Example function to calculate the factorial of a number (recursive)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Memoization function wrapper
  function memoize(func) {
    const cache = {};
    return function(n) {
      if (cache[n]) {
        console.log(`Fetching cached result for ${n}`);
        return cache[n]; // Return cached result if available
      } else {
        console.log(`Calculating result for ${n}`);
        const result = func(n);
        cache[n] = result; // Cache the result
        return result;
      }
    };
  }
  
  // Memoized factorial function
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); // Calculates factorial(5) and caches the result
  console.log(memoizedFactorial(3)); // Calculates factorial(3) and caches the result
  console.log(memoizedFactorial(5)); // Fetches cached result for factorial(5)
  console.log(memoizedFactorial(4)); // Calculates factorial(4) and caches the result
  console.log(memoizedFactorial(3)); // Fetches cached result for factorial(3)
  