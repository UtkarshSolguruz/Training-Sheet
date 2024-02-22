// callbacks are functions passed as parameters.

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displaySum(result){
    console.log(result);
}

sum(displaySum, 1, 5);