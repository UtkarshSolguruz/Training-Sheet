"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let numbers = [1, 2];
let user = [1, 'utkarsh'];
user = [2, 'prit'];
let mySize = 2 /* Size.medium */;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = { id: 1, name: 'utkarsh', retire: (date) => {
        console.log(date);
    } };
// union
function kgtolbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgtolbs(10);
kgtolbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
console.log(quantity);
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hello');
}
greet(null);
//# sourceMappingURL=index.js.map