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