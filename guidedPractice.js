//Create an array to include the following list items: Honda, Toyota, Ford, Subaru.
const cars = ['Honda', 'Toyota', 'Ford', 'Subaru']
//transform array to ["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]
cars.shift()
cars.unshift('Hyundai')
cars.splice(2, 1, 'Mercedes')
cars.pop()
cars.push('Audi')
console.log(cars)

//Use a loop to determine how many e's are in the sentence: "There once was a donkey named Eeyore."
let sentence = "There once was a donkey named Eeyore."
let count = 0
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'e') {
        count += 1;
    }
}
console.log(count);