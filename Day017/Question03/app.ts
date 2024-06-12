function calculateArea(length: number, width: number) {
  return length * width
}
console.log(calculateArea(10, 20))

const calculateAreaArrow = (length: number, width: number) => length * width
console.log(calculateAreaArrow(10, 20))