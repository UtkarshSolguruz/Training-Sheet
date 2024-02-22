// polyfill for forEach array method

const arr = [1,2,3,4,5];

// simulating browser incompatibility
Array.prototype.forEach = null


// check whether the method is compatible or not:
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callbackFunction){
        for(let i of this){
            callbackFunction(i)
        }
    }
}

arr.forEach((value)=>{
    console.log(value*2);
})
