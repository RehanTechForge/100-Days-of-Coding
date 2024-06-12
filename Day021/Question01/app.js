var carType;
(function (carType) {
    carType[carType["sedan"] = 0] = "sedan";
    carType[carType["hatchback"] = 1] = "hatchback";
    carType[carType["SUV"] = 2] = "SUV";
    carType[carType["convertible"] = 3] = "convertible";
})(carType || (carType = {}));
console.log(carType.hatchback);
