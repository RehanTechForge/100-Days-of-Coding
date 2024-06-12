var numbers = [2, 4, 6, 22];
// let doubleNumbers = [];
// for (const number of numbers) {
//   doubleNumbers.push(number * 2);
// }
// console.log(doubleNumbers);
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
