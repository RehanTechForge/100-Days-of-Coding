function createAdder(number: number): (val: number) => number {
  return (val: number) => number + val;
}
const addOne = createAdder(1);
console.log(addOne(2));
console.log(addOne(7));
