var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceOne = [200, 400, 350, 100];
var priceTwo = [100, 200, 300, 400];
var combinedArray = __spreadArray(__spreadArray([], priceOne, true), priceTwo, true);
console.log("The combination of two array", combinedArray);
console.log("Ascending order", combinedArray.sort(function (a, b) { return a - b; }));
