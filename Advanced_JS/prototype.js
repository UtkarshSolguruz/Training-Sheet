// JS objects have a special property called prototype that is either null or references another object.


let a = {name: "utkarsh",language:"javascript"}

console.log(a); 


let p = {lastname:"varma"}

a.__proto__ = p


p.__proto__ = {
    jobpost: "front-end intern"
}

console.log(a.lastname)
console.log(a.jobpost)


//custom push function 
Array.prototype.myPush = (val)=>{
    arr[arr.length] = val;
}

let arr = [1,2,3,4,5,6];
arr.myPush(7);
console.log(arr);


