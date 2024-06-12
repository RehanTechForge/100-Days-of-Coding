let grades = [88, 94, 72, 99, 53, 77];
let sum = 0;
let average;
for (const grade of grades) {
  sum += grade
  average = sum / grades.length
}
console.log(average);