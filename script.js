// Predefined static variables according to formula: A = P(1 + (r / n))^(n * t)
let P = 10000;   // Principal amount
let r = 0.05;    // Annual interest rate (5%)
let n = 4;       // Number of times interest is compounded per year
let t = 3;       // Time in years

// Calculate Total Amount (A)
let A = P * Math.pow((1 + (r / n)), (n * t));

// Calculate Compound Interest
let compoundInterest = A - P;

// Display result using console.log() as requested
console.log("The compound interest after " + t + " years is: " + compoundInterest.toFixed(2));
console.log("The total amount after " + t + " years is: " + A.toFixed(2));
