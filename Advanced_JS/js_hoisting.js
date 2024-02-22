// hoisting functions

function sum(a,b){
    console.log(a+b);
}

const arrowSum = (a,b)=>{console.log(a+b)}

sum(1,3);
arrowSum(1,5); //function will generate output as it has been called after being defined.


console.log(newSum(1,3));
console.log(newArrowSum(1,5)); //cannot access function before initialization error is generated.

function newSum(a,b){
    console.log(a+b);
}

const newArrowSum = (a,b) =>{console.log(a+b);}





// also var variable is initiazed by default and set to undefined.