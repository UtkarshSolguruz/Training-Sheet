// closures are functions that can access values outside of the curly braces


const b = 4;
function closureAdd(a){
    console.log(a+b)
    console.log(c)
    function addthree(c){
        console.log(a)
    }
}

closureAdd(3)



function outer(outerv){
    return function inner(innerv){
        console.log('outer:', outerv);
        console.log('inner:', innerv)
    }
}

const newFunction = outer('utkarsh');
newFunction('varma')



