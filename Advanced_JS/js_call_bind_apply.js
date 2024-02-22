let name = {
    firstName:"utkarsh",
    lastName:'varma',    
}

let fullName =  function(town, state){
    console.log(this.firstName+" "+this.lastName+" "+town+" "+state);
}

fullName.call(name, 'ahmedabad','gujarat')

let name2 = {
    firstName:'sachin',
    lastName:'tendulkar'
}

fullName.apply(name2,['mumbai','maharastra'])//in apply method, arguments must be passed as array

name3 = {
    firstName:'virat',
    lastName:'kohli'
}

// bind method
let newName = fullName.bind(name3, 'rampur','delhi') //bind method returns a method
console.log(newName)
newName();
