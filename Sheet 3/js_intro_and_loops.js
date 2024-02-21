//JavaScript Statements:
let x, y, z;
x = 5;
y = 5;
z = x+y;



// function to add two numbers.
// function is a block of code designed to perform a task, and it needs to be called in order for it to be executed.

function addNumbers(a,b){
    console.log(a+b);
}



// for loop
// printing table of a number using for loop

function numTable(num){
    for(i=1; i<=10; i++){
        console.log(num+" X "+i+" = "+num*i);
    }
}

// printing sum of all the numbers in array using for in

const numbers = [1,2,3,4,5];
sum=0;

function sumOfArray(){
    for(x in numbers){
        sum = sum + numbers[x];
    }
    console.log(sum)
}


// while loop
i=0;
function printingMsg(){
    while(i<10){
        console.log("This is it") 
        i++;
    }
}
printingMsg()



