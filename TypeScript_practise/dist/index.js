"use strict";
// // let sales = 123_456_789;
// // let course = "TypeScript";
// // let is_published = true;
// // let numbers : number[] = [1,2]
// // let user: [number,string] = [1,'utkarsh']
// // user = [2,'prit']
// // const enum Size {small=1,medium,large}
// // let mySize = Size.medium
// // console.log(mySize);
// // function calculateTax(income: number, taxYear=2022): number{  
// //     if(taxYear < 2022)
// //         return income * 1.2;
// //     return income * 1.3;
// // }
// // calculateTax(10000,2022);
// // type Employee = {
// //     id: number,
// //     name: string,
// //     retire: (date: Date)=> void;
// // }
// // let employee: Employee = {id:1,name:'utkarsh',retire:(date: Date)=>{
// //     console.log(date)
// // }}
// // // union
// // function kgtolbs(weight: number | string){
// //     // Narrowing
// //     if(typeof weight === 'number')
// //         return weight * 2.2;
// //    else
// //     return parseInt(weight) * 2.2;
// // }
// // kgtolbs(10);
// // kgtolbs('10kg')
// // type Draggable = {
// //     drag: ()=> void;
// // }
// // type Resizable = {
// //     resize: ()=>void;
// // }
// // type UIWidget = Draggable & Resizable;
// // let textBox: UIWidget = {
// //     drag:  ()=> {},
// //     resize: ()=> {}
// // }
// // type Quantity =  50 | 100;
// // let quantity: Quantity = 50;
// // console.log(quantity);
// // function greet(name: string | null){
// //     if(name)
// //         console.log(name.toUpperCase())
// //     else    
// //         console.log('hello')
// // }
// // greet(null);
// // type Customer = {
// //     birthday: Date
// // };
// // function getCustomer(id:number):Customer|null{
// //     return id === 0?null : {birthday: new Date()};
// // }
// // let customer = getCustomer(0);
function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);
function printHelloWorld(a) {
    console.log("hello world!");
    console.log(a);
}
printHelloWorld(10);
//# sourceMappingURL=index.js.map