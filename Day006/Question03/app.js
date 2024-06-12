var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placeToVIsit = ["Paris", "Tokyo", "New York", "Sydney", "Cairo"];
console.log("Original Array ".concat(placeToVIsit));
var alphabeticalOrder = __spreadArray([], placeToVIsit, true);
alphabeticalOrder.sort();
console.log("Alphabitical Order ".concat(alphabeticalOrder));
console.log("Original Array ".concat(placeToVIsit));
var reverseOrder = __spreadArray([], placeToVIsit, true);
reverseOrder.sort().reverse();
console.log("Reverse Alphabitical Order ".concat(reverseOrder));
console.log("Original Array ".concat(placeToVIsit));
// const reverseList = [...placeToVIsit];
placeToVIsit.reverse();
console.log("Reverse List ".concat(placeToVIsit));
placeToVIsit.reverse();
console.log("Original Array ".concat(placeToVIsit));
placeToVIsit.sort();
console.log("Alphabitical Order ".concat(placeToVIsit));
placeToVIsit.sort().reverse();
console.log(" reverse alphabetical order ".concat(placeToVIsit));
