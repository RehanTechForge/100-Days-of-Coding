let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

let onlyWords = mixedArray.filter((item) => typeof item === "string")
console.log(onlyWords);