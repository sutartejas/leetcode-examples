function largeFactorial(num) {

    // Initialize result
    let fact = BigInt(1); // Or BigInt 1

    // Multiply f with 2, 3, ...N
    for (let i = 2; i <= num; i++)
        fact *= BigInt(i);

    return fact;
}


const result = largeFactorial(20)
console.log(result);

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const result2 = factorial(5);
console.log(result2); // Output will be 120
