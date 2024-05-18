

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Even number: square it
            return num**2;
        } else {
            // Odd number: triple it
            return num ** 3;
        }
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = processArray(numbers);
console.log(newNumbers); // Output: [3, 4, 9, 16, 15, 36]

  

