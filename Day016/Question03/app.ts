let priceOne = [200, 400, 350, 100]
let priceTwo = [100, 200, 300, 400]
let combinedArray = [...priceOne, ...priceTwo];
console.log("The combination of two array", combinedArray);
console.log("Ascending order", combinedArray.sort((a, b) => a - b));
