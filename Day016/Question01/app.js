var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2015,
    describe: function () {
        return "The laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    }
};
console.log(laptop.describe());
