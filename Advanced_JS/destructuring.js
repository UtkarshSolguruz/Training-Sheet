let a, b, rest;
[a,b] = [10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10,20,30,40,50]

console.log(rest)



const x = [1,2,3,4,5]

const [y,z] = x;
console.log(y)
console.log(z)
console.log(x)




const obj = {firstname:"utkarsh",lastname:"varma"}
const {firstname,lastname} = obj;
console.log(firstname)
console.log(lastname)


const foo = ["red","green","blue"];
const [one,two,three] = foo;
console.log(one)
console.log(two)
console.log(three)


function f(){
    return [1,2]
}

const [first,second] = f()
console.log(first)
console.log(second)







// swaping values of two variables without third variable
// using destructuring
a = 5;
b = 'varma';
[a,b] = [b,a]
console.log("After Swap:")
console.log(a)
console.log(b)
