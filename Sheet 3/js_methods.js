var arr = [1,2,3,4,5];
var marr = arr.map(myFunc);

console.log(marr)

const myFunc = (value) =>{
    return value * 2;
}

// function myFunc(value){
//     return value*2;
// }



// FILTER

const arr = [12,3,45,6,89];
const newArr = arr.filter((value)=>{
    return value > 18;
});
console.log(newArr);


// foreach and push

arr = [1,2,3];
newArr = [];
arr.forEach((value)=>{
    newArr.push(value*2); 
})
console.log(newArr);



// pop
arr = [1,2,3]
newArr = [];
arr.forEach((value)=>{
    console.log(arr.pop(value))
});


// for of 
const arr = [1,2,3,4,5]
txt = ""
for(let x of arr){
    txt+=x
}
console.log(txt)


// slice 
let arr = ['apple','mango','banana','orange'];
console.log(arr)
let Arr = arr.slice(1)
console.log(newArr)

// splice   




