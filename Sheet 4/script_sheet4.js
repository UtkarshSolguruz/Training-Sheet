// Odd or even
const OddorEven = ()=>{
    let a = prompt("Enter a number:")
    if(a%2==0){
        console.log('even')
    }
    else{
        console.log('odd')
    }
}

// Odd or Even from given range:
const oddOrEvenFromRange = () =>{
    let start = prompt("Enter starting number:");
    let end = prompt("Enter ending number");
    for(i=start;i<=end;i++){
        if(i%2==0){
            console.log(i,"even")
        }
        else{
            console.log(i, "odd")
        }
    }
}

// Factorial without using recursion
const Factorial = () =>{
    let num = 5
    let fact = 1
    while(num>0){
        fact = fact*num
        num = num - 1
    }
    console.log(fact)
}

// Factorial using recursion
function RecFactorial(num, sum = 1){
    // let num = 5;
    // let fact = 1;
    // while(num>0){
    //     fact *= num;
    //     num -= 1;
    // }
    // console.log(num) ;
    sum = num * sum;
    num--;
    if(num)
        RecFactorial(num, sum)
    else
        console.log(sum);
}

// for(;;){
//     // infinite for loop
// }

// fibonacci
function Fibonacci(){
    let a=0,b=1,c;
    const number = prompt("Enter a number");

    for(i=0;i<number;i++){
        console.log(a);
        c = a+b;
        a = b;
        b = c;

    }
}

// cube
function Cube(){
    const a = prompt('Enter a number:')
    console.log(a**3);
}

// swapping variable with an extra variable
const swapVariable = () =>{
    let a = prompt("Enter a word:")
    let b = prompt("Enter a word:")
    console.log("a = ",a)
    console.log("b = ",b)
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a);
    console.log(b);
}

// swapping variable without extra variable
const swapVariableWithoutThird = () =>{
    let a = 10
    let b = 5
    console.log(a)
    console.log(b)
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a);
    console.log(b);
}

// sum of digit
// function sumOfDigit(){
//     let number = parseInt(prompt("Enter a number:"));
//     let newNum = String(number).split("");
//     let newArr = [];
//     for(let i of newNum){
//         temp = Number(i)     //overly inefficient way to doing it
//         newArr.push(temp);
//         }
//     console.log(newArr)
//     let sum=0;
//     for(let x=0; x<=newArr.length-1; x++){
//         sum = sum + newArr[x];
//         }
//     console.log(sum)
// }



 function sumOfDigit(num){
    let sum = 0;
    num.toString().split("").forEach((digit)=>{
        sum = sum+parseInt(digit);
    })
    console.log(sum);
}


function PrimeNumber(){
    let n = prompt("Enter the number you want to check")
    let flag = true;
    for(i=2;i<=n-1;i++){
        if(n%i==0){
            flag = false;
            break
        }
    }
    if(flag==true){
        console.log(n,"is prime")
    }
    else{
        console.log(n,'is not prime')
    }
}


function VowelsAndConsonants() {
  let str = "Utkarsh";
  for (i = 0; i <= str.length - 1; i++) {
    c = str[i].toLowerCase();
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
      console.log("vowels -", c);
    } else {
      console.log("consonants -", c);
    }
  }
}



function CountSpaces(){
    let para = "my name is utkarsh";
    let spaceCount = 0;
    for(let i in para){
        if(para[i] == " "){
            spaceCount++
        }
    }
    console.log(para)
    console.log(spaceCount)
    let wordCount = para.split(' ');
    console.log(wordCount.length)
}



function Palindrome(){
    let number = prompt('Enter a number')
    const strNum = number.toString().split('').reverse().join('')
    if(number == strNum){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}   



// Armstrong number
function Armstrong(){
    let number = prompt("Enter a number:");
    numberOfDigits = number.length;
    let sum = 0;
    let temp = number;
    while(temp>0){
        let remainder = temp % 10;
        sum += remainder**numberOfDigits;
        temp = parseInt(temp/10);
    }
    if(sum == number){
        console.log("armstrong number")
    }
    else{
        console.log("not armstrong number")
    }
}

// Armstrong number in given range
// const ArmstrongInRange = ()=>{
//     let start = prompt("Enter starting number");
//     let end = prompt("Enter ending number");
//     for(let i=start;i<=end;i++){
//         let numberOfDigits = i.length;
//         let sum = 0;
//         let temp = number;
//         while(temp>0){
//             let remainder = temp%10;
//             sum += remainder**numberOfDigits;
//             temp = parseInt(temp/10);
//         }
//         if(sum == number){
//             console.log('palindrome')
//         }
//         else{
//             console.log('not palindrome')
//         }
//     }
// }


const ArmstrongInRange = ()=>{
    let start = prompt("Enter starting number");
    let end = prompt("Enter ending number");
    for(let i=start;i<=end;i++){
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while(temp>0){
            let remainder = temp%10;
            sum += remainder**numberOfDigits;
            temp = parseInt(temp/10);
        }
        if(sum == i){
            console.log('armstrong')
        }
        else{
            console.log('not armstrong')
        }
    }
}


const findDuplicate = () =>{
    let arr = ['utkarsh','neel','prit','utkarsh'];
    const duplicates = arr.filter((item,index)=>arr.indexOf(item)!=index);
    console.log(duplicates);
}


// git change