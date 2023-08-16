//Array methods
const items = [
    { name: "Bike", price: 100},
    { name: "TV", price: 200 },
    { name: "Album", price: 10},
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
]
// Filter method
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems);

//Map method
const itemNames = items.map((item) => {
    return item.name
}) 

console.log(itemNames);

//Find method
const foundItem = items.find((item) => {
    return item.name === "Book"
}) 

console.log(foundItem);

// forEach method

items.forEach((item) => {
    console.log(item.name);
})
//Some method

const hasInexpensiveItems = items.some((item) =>{
    return item.price <= 10
})
console.log(hasInexpensiveItems);
//Every method

const inexpensiveItems = items.every((item) =>{
    return item.price <= 100
})
console.log(inexpensiveItems);
//Reduce method

const sumPrice = items.reduce((currenTotal, item) => {
    return item.price + currenTotal
}, 0)
console.log(sumPrice);

//Includes method

const itemz = [1, 2, 3, 4, 5]

const includesTwo = itemz.includes(2)
console.log(includesTwo);
