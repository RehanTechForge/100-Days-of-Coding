function createAdder(number) {
    return function (val) { return number + val; };
}
var addOne = createAdder(1);
console.log(addOne(2));
console.log(addOne(7));
