let products = [];
let editIndex = null;
localArray = [];

function validate() {
    let productName = document.getElementById('p-name').value;
    let productQuantity = document.getElementById('p-quantity').value;
    let productPrice = document.getElementById('p-price').value; 
    let productSku = document.getElementById('p-sku').value;
    let productDescription = document.getElementById('p-desc').value;
    
    check(productName);
    // name
    // let spaceRegex = /^[^ ]/;
    // let twoSpace = /^(?:(?!\s\s).)*$/;
    // let numbers = /^([^0-9]*)$/
    // let specialCharacters = /^[a-zA-Z0-9_]+$/;
    // let space = /^[^\s]+$/;
    // let hyphen = /-/;
    

    let nameError = '';
    if(productName === ""){
        nameError = "Name field is empty";  
    }
    // else if(hyphen.test(productName)){
    //     nameError = "hyphens are not allowed in this form."
    // }
    // else if(!spaceRegex.test(productName)){
    //     nameError = "Product name should not start with a blank space";
    // }
    // else if (!twoSpace.test(productName)){
    //     nameError = "Product name should not have more than one space in between";
    // }
    // else if(!numbers.test(productName)){
    //     nameError = "numbers should not be present"
    // }
    // else if(!specialCharacters.test(productName)){
    //     nameError = "special characters are not allowed"
    // }



    // quantity
    let onlyNumbers = /^[0-9]+$/;
    let startWithZero = /^[1-9]\d*$/;

    let quantityError = '';
    if(productQuantity === "") {
        quantityError = "Quantity field should not be empty";
    }
    // else if(!hyphen.test(productQuantity)){
    //     quantityError = "invalid input"
    // }
    // else if(!specialCharacters.test(productQuantity)){
    //     quantityError = "special characters not allowed"
    // }
    // else if(!startWithZero.test(productQuantity)){
    //     quantityError = "Quantity should not start with zero.";
    // }
    // else if(productQuantity < 1){
    //     quantityError = "only positive numbers are allowed";
    // }
    // else if(!spaceRegex.test(productQuantity)){
    //     quantityError = "field should not start with a blank space";
    // }
    // else if(!space.test(productQuantity)){
    //     quantityError = "cannot have space between numbers";
    // }
    // else if(!onlyNumbers.test(productQuantity)){
    //     quantityError = "only numbers are required for this field";
    // }
    // else if(productQuantity>10000){
    //     quantityError = "quantity should be less than 10000.";
    // }

    // price
    let priceError = "";
    if(productPrice === ""){
        priceError = "Price field cannot be empty";
    }
    // else if(!specialCharacters.test(productPrice)){
    //     priceError = "special characters are not allowed";
    // }
    // else if(productPrice<1){
    //     priceError = "Price should be greater than 0";
    // }
    // else if(!startWithZero.test(productPrice)){
    //     priceError = "Price should not start with 0";
    // }
    // else if(productPrice>100000){
    //     priceError = "Price cannot be above 1 lakh.";
    // }


    // sku
    let skuError = '';
    let specialCharacter = /^[^!@#$%^&*()_+={}[\]:;<>,.?/~`\\|"' ]+$/;
    if(productSku === ""){
        skuError = "Sku field cannot be empty";
    }
    // else if(!spaceRegex.test(productSku)){
    //     skuError = "Sku cannot start with a blank space";
    // }
    // else if(!specialCharacter.test(productSku)){
    //     skuError = "Special characters or blank spaces are not allowed";
    // }
    // else if(!space.test(productSku)){
    //     skuError = "Spaces between characters are not allowed"
    // }


    // description
    let descError = "";
    if(productDescription === ""){
        descError = "Description cannot be empty"
    }



    document.getElementById('reg-p-name').innerHTML = nameError;
    document.getElementById('reg-p-quantity').innerHTML = quantityError;
    document.getElementById('reg-p-price').innerHTML = priceError;
    document.getElementById('reg-p-sku').innerHTML = skuError;
    document.getElementById('reg-p-desc').innerHTML = descError;

    return nameError === '' && quantityError === '' && priceError === '' && skuError === '' && descError == '';
}

let productName = document.getElementById('p-name');
let nameError = document.getElementById('reg-p-name');
productName.addEventListener('keypress', (e) => {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
        console.log('yes');
    } else {
        console.log('no');
        nameError.innerHTML = "Only alphabets allowed";
    }
});
productName.addEventListener('input', () => {
    if (/^[a-zA-Z]*$/.test(productName.value)) {
        nameError.innerHTML = "";
    }
});

let productQuantity = document.getElementById('p-quantity');
let productQuantityError = document.getElementById('reg-p-quantity');
            productQuantity.addEventListener('keypress',(e)=>{
                if(e.keyCode>47 && e.keyCode<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    productQuantityError.innerHTML="only numbers allowed";
                }
            productQuantity.addEventListener('input',()=>{
                if(productQuantity.value === ""){
                    productQuantityError.innerHTML="";
                }
            })
    });

let productPrice = document.getElementById('p-price');
let productPriceError = document.getElementById('reg-p-price');
            productPrice.addEventListener('keypress',(e)=>{
                if(e.keyCode>47 && e.keyCode<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    productPriceError.innerHTML="only numbers allowed";
                }
            productPrice.addEventListener('input',()=>{
                if(productPrice.value === ""){
                    productPriceError.innerHTML="";
                }
            })
});

let productSku = document.getElementById('p-price');
let productSkuError = document.getElementById('reg-p-price');
let pattern = /[^a-zA-Z0-9]/
productSku.addEventListener('keypress', (e) => {
    if (pattern.test(productSku.value)) {
        console.log('no');
        productSkuError.innerHTML = "Only numbers and alphabets allowed";
    } else {
        console.log('yes');
        productSkuError.innerHTML = "";
    }
});





function check(productName) {
    if (typeof productName === 'string') {
        return products.some(product => product.name.toLowerCase() === productName.toLowerCase())
    }
    return false
}



function exists(name) {
    const productName = name.toString();
    if (check(productName)) {
        document.getElementById('reg-p-name').innerHTML = "name already exists"
        return true;
    }
    return false
}





function getData(){

    if(!validate()){
        return;
    }

    let productName = document.getElementById('p-name').value;
    let productQuantity = document.getElementById('p-quantity').value;
    let productPrice = document.getElementById('p-price').value;
    let productSku = document.getElementById('p-sku').value;
    let productDescription = document.getElementById('p-desc').value;

    

    if (editIndex !== null) {
        products[editIndex].name = productName;
        products[editIndex].quantity = productQuantity;
        products[editIndex].price = productPrice;
        products[editIndex].sku = productSku;
        products[editIndex].description = productDescription;
        editIndex = null;
    } 
    else {
        if(exists(productName)){
            return;
        }
        let productObj = {
            name: productName,
            quantity: productQuantity,
            price: productPrice,
            sku: productSku,
            description: productDescription
        };
        products.push(productObj);
    };
    localStorage.setItem('arrKey',JSON.stringify(products))
    resetForm();
    printData(products);
}




function printData(products){
    let tableBody = document.getElementById('values');
    tableBody.innerHTML="";
        products.map((value, index)=>{
                let newRow = `<tr>   
                    <td>${index+1}</td>
                    <td>${value.name}</td>
                    <td>${value.quantity}</td>
                    <td>${value.price}</td>
                    <td>${value.sku}</td>
                    <td>${value.description}</td>
                    <td><button onclick="editRow(${index})" id="edit">Edit</button><button onclick="deleteRow(${index})" id="delete">Delete</button></td>
                </tr>`
        tableBody.innerHTML+=newRow;
        });  
    } 
    
    
function deleteRow(index){
    var a = prompt('are you sure?(press "y" to confirm)');
    if(a=="y"){
    products.splice(index, 1);
    }
    resetForm();
    printData(products);
    localStorage.setItem('arrKey',JSON.stringify(products))
}


function editRow(index){
    document.getElementById('submit-btn').innerText="Update";
    let product = products[index];
    document.getElementById('p-name').value=product.name;   
    document.getElementById('p-quantity').value=product.quantity;
    document.getElementById('p-price').value=product.price;  
    document.getElementById('p-sku').value=product.sku;    
    document.getElementById('p-desc').value=product.description; 
    editIndex = index;
}


function resetForm(){
    document.getElementById('p-name').value="";   
    document.getElementById('p-quantity').value="";
    document.getElementById('p-price').value="";  
    document.getElementById('p-sku').value="";    
    document.getElementById('p-desc').value="";
    document.getElementById('submit-btn').innerText="Submit";
    editIndex=null;
}


function searchData(){
    let searchInput = document.getElementById('search').value;
    let fProducts = products.filter((item)=>{
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
    }
    )
    console.log(fProducts)
    if(searchInput !== ""){
        printData(fProducts);
    }
    else{
        printData(products);
    }
}


window.onload =()=>{
    let data = localStorage.getItem('arrKey');    
    if(data){
        products = JSON.parse(data);
        printData(products)
    }
}