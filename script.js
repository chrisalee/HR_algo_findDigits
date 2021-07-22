/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

const findDigits = (n) => {
    // Write your code here
    let totalDivisible = 0;
    let digits = n.toString().split('');
    let realDigits = digits.map(Number);
    // console.log(realDigits);
    
    for(let i = 0; i < realDigits.length; i++) {
        if(n % realDigits[i] === 0) {
            totalDivisible++;
        }
    }
    
    return totalDivisible;
    
}
