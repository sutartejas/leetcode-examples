function isPrime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            return false; 
        } 
    } 
    return num > 1; 
} 
  
function printPrimeNumbers(n) { 
    for (let i = 2; i <= n; i++) { 
        if (isPrime(i)) { 
            console.log(i); 
        } 
    } 
}
function isPrime(n) { 
    // Corner case 
    if (n <= 1) 
        return false; 

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 

// Driver Code 

isPrime(11)  
    ? console.log("true")  
    : console.log("false"); 
  
//printPrimeNumbers(100);