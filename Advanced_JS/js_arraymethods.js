// filter method

arr = [
    {name: 'Bike', price:100},
    {name:"TV",price:200},
    {name:"Album",price:10},
    {name:"Book",price:5},
    {name:"Phone",price:500},
    {name:"Computer",price:200},
]


let newArr = arr.filter((item)=>{
    return item.price > 100;
})

console.log(newArr)



//map
const itemNames = arr.map((item)=>{
    return item.name
})

console.log(itemNames)


// find 
const findName = arr.find((item)=>{
    return item.name === "TV";
})
console.log(findName)


// forEach
arr.forEach((item)=>{
    console.log(item.name)
    console.log(item.price)
})


// sum
const expensiveItems = arr.some((item)=>{
    return item.price > 100
})
console.log(expensiveItems)

// every
const allExpensiveItems = arr.every((item)=>{
    return item.price>100
})
console.log(allExpensiveItems);

// reduce
const total = arr.reduce((curTotal, item)=>{
    return curTotal + item.price
},0);
console.log(total)



// includes
const includesArr = [1,2,3,4,5];
const [check1,check2] = [includesArr.includes(1),includesArr.includes(7)];
console.log(check1)
console.log(check2)





// slice
const fruits = ['banana','orange','lemon','apple','mango'];
const citrus = fruits.slice(1)
const also = fruits.slice(1,4);
console.log(citrus)
console.log(also)


// splice
// to add elements
let cars = ['audi','bmw','merc']
cars.splice(1,0,'lotus')
console.log(cars)

// add element while removing elements
let ncars = ['audi','bmw','merc']
ncars.splice(1,1,'lotus')
console.log(ncars)

// removing elements using splice
let mcars = ['audi','bmw','merc']
mcars.splice(0,1)
console.log(mcars)