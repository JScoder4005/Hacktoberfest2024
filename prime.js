function isPrime(num) {
   
    if (num <= 1) {
        return false;
    }

   
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i); // This will print prime numbers between 1 and 100
    }
}
