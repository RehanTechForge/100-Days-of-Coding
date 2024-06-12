var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var onlyWords = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(onlyWords);
