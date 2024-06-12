var grades = [88, 94, 72, 99, 53, 77];
var sum = 0;
var average;
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    sum += grade;
    average = sum / grades.length;
}
console.log(average);
