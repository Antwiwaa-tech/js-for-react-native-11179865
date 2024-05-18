

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            
            return num**2;
        } else {
    
            return num ** 3;
        }
    });
}


const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = processArray(numbers);
console.log(newNumbers); 

function formatArrayStrings(word , arr){
    return word.map((str, index) => {
        const num = numbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
        }
    );

    
}


 const word = ["antwiwaa", "afua", "gladys", "apple", "app"];
const formattedStrings = formatArrayStrings(word, newNumbers);
console.log(formattedStrings);

export const previous = word
export const newWord = formattedStrings

  

