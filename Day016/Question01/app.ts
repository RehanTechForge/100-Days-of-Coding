type TLaptop = {
  make: string,
  model: string,
  year: number
  describe: () => string
}
let laptop: TLaptop = {
  make: "Dell",
  model: "XPS 15",
  year: 2015,
  describe: function () {
    return `The laptop is a ${this.year} ${this.make} ${this.model}`
  }
}
console.log(laptop.describe())
