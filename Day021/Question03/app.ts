type TShape = {
  kind: "circle" | "rectangle",
  radius?: number
  width?: number
  height?: number
}

let circle: TShape = {
  kind: "circle",
  radius: 10
}

let rectangle: TShape = {
  kind: "rectangle",
  width: 10,
  height: 20
}

console.log(circle, rectangle);
