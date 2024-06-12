interface student {
  name: string,
  age: number,
  isAdmin: boolean,
  courses: string[],
  wife?: string
}
let student = {
  name: "John",
  age: 25,
  isAdmin: false,
  courses: ["Math", "English"],
  wife: null
}
console.log(student);
