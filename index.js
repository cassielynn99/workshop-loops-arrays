//Only odds:
//create JS code that accepts numbers, but only returns odd numbers
//examples: [2, 4, 6, 8, 11, 20, 15, 22] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] [70, 42, 55, 81, 21, 91, 34] [2, 4, 6, 8, 10, 11, 12] 

let numbers = [2, 4, 6, 8, 10, 11, 12]
let onlyOdds = []
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (element % 2 === 1) {
        onlyOdds.push(element)
    }
}

console.log(onlyOdds);

//vowel vs consonant 
//create JS code that takes a word, breaks the word, and reports how many consonants vs vowels are in the word
//Hint: Define two variables that keep track of the number of consonants and vowels.
//examples: 'hello', 'ukelele', 'awesome', 'onomonopia', 'textbook'

//First attempt...overcomplicated:
// const word = 'hello'
// const vowels = ['a', 'e', 'i', 'o', 'u']
// let vowelCounter = 0
// const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let consonantCounter = 0
// for (let i = 0; i < word.length; i++) {
//     if (word.includes(vowels)) {
//         vowelCounter += 1
//     } else if (word.includes(consonant)) {
//         consonantCounter += 1
//     }
// }
// console.log(vowelCounter);
// console.log(consonantCounter);

const word = 'textbook'
let vowels = 0
let consonant = 0
for (let i = 0; i < word.length; i++) {
    let element = word[i]
    if (element === 'a' || element ==='e' || element ==='i' || element === 'o' || element ==='u') {
        vowels += 1;
    } else {
        consonant += 1;
    }
}

// console.log(vowels);
// console.log(consonant);
console.log(`${word} has ${consonant} consonants and ${vowels} vowels`)

//Reverse array:
//use a for loop that creates a NEW array that returns the array reversed
//example: [1, 2, 3] [1, 3, 5, 7, 9, 11] [20, 50, 30, 60, 200] [1, -1, 2, -3, 5, -8, 13]

let array = [1, -1, 2, -3, 5, -8, 13]
let newArray = []
for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array.pop())
}

console.log(newArray);

//Fizzbuzz
//create JS code that prints 1-100
//multiple of 3 = "Fizz", multiple of 5 = "Buzz", multiple of 3 and 5 = "Fizzbuzz"

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
 }