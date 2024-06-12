type TLaptop = {
  make: string,
  model: string,
  year: string
}
let laptops: TLaptop[] = [
  {
    make: 'Apple',
    model: 'MacBook Pro',
    year: '2017'
  },
  {
    make: 'Dell',
    model: 'XPS',
    year: '2016'
  },
  {
    make: 'HP',
    model: 'Envy',
    year: '2015'
  }
]
let [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop, secondLaptop);