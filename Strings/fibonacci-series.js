function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Example usage:
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciRecursive(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(fibonacci(i));
    };
    return res;
}



// Example usage to get the nth Fibonacci number:
console.log(fibonacciRecursive(10)); // Output: 55
