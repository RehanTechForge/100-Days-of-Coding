console.log("Testing equality with strings:");
console.log("Apple" == "Apple"); // true
// console.log("apple" == "Apple"); // false

console.log("Testing with lower case:");
console.log("apple".toLowerCase() == "Apple".toLowerCase()); // true

console.log("Numerical tests:");
console.log(5 > 10);//false
console.log(5 < 10);//true

console.log("Tests with 'and' and 'or':");
console.log(true && false);//false
console.log(true || false);//true

let fruits = ["apple", "banana", "cherry"];
fruits.indexOf("apple") !== -1 ? console.log(true) : console.log(false);

fruits.indexOf("mongo") !== -1 ? console.log(true) : console.log(false);


