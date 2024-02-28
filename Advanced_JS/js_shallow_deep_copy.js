let arr1 = [1,2,3,4,5]
let arr2 = arr1; //shallow copy
// let arr2 = [...arr1] //deep copy
arr2[2] = 100
console.log(arr1)
console.log(arr2)