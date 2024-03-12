"use strict";
let editIndex = null;
let products = [];
function validate() {
    let productName = document.getElementById('p-name');
    let productQuantity = document.getElementById('p-quantity');
    let productPrice = document.getElementById('p-price');
    let productSku = document.getElementById('p-sku');
    let productDescription = document.getElementById('p-desc');
    // name
    let spaceRegex = /^[^ ]/;
    let twoSpace = /^(?:(?!\s\s).)*$/;
    let numbers = /^([^0-9]*)$/;
    let space = /^[^\s]+$/;
    let hyphen = /-/;
    let specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    let nameError = '';
    if (productName.value === "") {
        nameError = "Field cannot be empty";
    }
    else if (hyphen.test(productName.value)) {
        nameError = "hyphens are not allowed in this form.";
    }
    else if (!spaceRegex.test(productName.value)) {
        nameError = "Product name should not start with a blank space";
    }
    else if (!twoSpace.test(productName.value)) {
        nameError = "Product name should not have more than one space in between";
    }
    else if (!numbers.test(productName.value)) {
        nameError = "numbers should not be present";
    }
    else if (specialCharacters.test(productName.value)) {
        nameError = "special characters are not allowed";
    }
    // quantity
    let onlyNumbers = /^[0-9]+$/;
    let startWithZero = /^[1-9]\d*$/;
    let quantityError = '';
    if (productQuantity.value === "") {
        quantityError = "Quantity field should not be empty";
    }
    // else if(!hyphen.test(productQuantity.value)){
    //     quantityError = "invalid input"
    // }
    else if (specialCharacters.test(productQuantity.value)) {
        quantityError = "special characters not allowed";
    }
    else if (!startWithZero.test(productQuantity.value)) {
        quantityError = "Quantity should not start with zero.";
    }
    else if (parseInt(productQuantity.value) < 1) {
        quantityError = "only positive numbers are allowed";
    }
    else if (!spaceRegex.test(productQuantity.value)) {
        quantityError = "field should not start with a blank space";
    }
    else if (!space.test(productQuantity.value)) {
        quantityError = "cannot have space between numbers";
    }
    else if (!onlyNumbers.test(productQuantity.value)) {
        quantityError = "only numbers are required for this field";
    }
    else if (parseInt(productQuantity.value) > 10000) {
        quantityError = "quantity should be less than 10000.";
    }
    // price
    let priceError = "";
    if (productPrice.value === "") {
        priceError = "Price field cannot be empty";
    }
    // else if(!specialCharacters.test(productPrice.value)){
    //     priceError = "special characters are not allowed";
    // }
    else if (parseInt(productPrice.value) < 1) {
        priceError = "Price should be greater than 0";
    }
    else if (!startWithZero.test(productPrice.value)) {
        priceError = "Price should not start with 0";
    }
    else if (parseInt(productPrice.value) > 100000) {
        priceError = "Price cannot be above 1 lakh.";
    }
    // sku
    let skuError = '';
    let specialCharacter = /^[^!@#$%^&*()_+={}[\]:;<>,.?/~`\\|"' ]+$/;
    if (productSku.value === "") {
        skuError = "Sku field cannot be empty";
    }
    else if (!spaceRegex.test(productSku.value)) {
        skuError = "Sku cannot start with a blank space";
    }
    else if (!specialCharacter.test(productSku.value)) {
        skuError = "Special characters or blank spaces are not allowed";
    }
    // else if(!space.test(productSku)){
    //     skuError = "Spaces between characters are not allowed"
    // }
    // description
    let descError = "";
    if (productDescription.value === "") {
        descError = "Description cannot be empty";
    }
    let a = document.getElementById('reg-p-name');
    a.innerHTML = nameError;
    let b = document.getElementById('reg-p-quantity');
    b.innerHTML = quantityError;
    let c = document.getElementById('reg-p-price');
    c.innerHTML = priceError;
    let d = document.getElementById('reg-p-sku');
    d.innerHTML = skuError;
    let e = document.getElementById('reg-p-desc');
    e.innerHTML = descError;
    return nameError === '' && quantityError === '' && priceError === '' && skuError === '' && descError == '';
}
function getData() {
    if (!validate()) {
        return;
    }
    let productName = document.getElementById('p-name');
    let productQuantity = document.getElementById('p-quantity');
    let productPrice = document.getElementById('p-price');
    let productSku = document.getElementById('p-sku');
    let productDescription = document.getElementById('p-desc');
    if (exists(productName.value)) {
        return;
    }
    if (editIndex !== null) {
        products[editIndex].name = productName.value;
        products[editIndex].quantity = productQuantity.value;
        products[editIndex].price = parseInt(productPrice.value);
        products[editIndex].sku = parseInt(productSku.value);
        products[editIndex].description = productDescription.value;
        editIndex = null;
    }
    else {
        let productObj = {
            name: productName.value,
            quantity: productQuantity.value,
            price: parseInt(productPrice.value),
            sku: parseInt(productSku.value),
            description: productDescription.value
        };
        products.push(productObj);
        console.log(products);
    }
    resetForm();
    printData(products);
}
function exists(name) {
    const productName = name.toString();
    const regPName = document.getElementById('reg-p-name');
    if (editIndex === null && products.some(product => product.name.toLowerCase() === productName.toLowerCase())) {
        regPName.textContent = "Name already exists";
        return true;
    }
    regPName.textContent = "";
    return false;
}
function printData(products) {
    let tableBody = document.getElementById('values');
    tableBody.innerHTML = "";
    products.map((value, index) => {
        let newRow = `<tr>   
                    <td>${index + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.quantity}</td>
                    <td>${value.price}</td>
                    <td>${value.sku}</td>
                    <td>${value.description}</td>
                    <td><button onclick="editRow(${index})" id="edit">Edit</button><button onclick="deleteRow(${index})" id="delete">Delete</button></td>
                </tr>`;
        tableBody.innerHTML += newRow;
    });
}
function deleteRow(index) {
    var a = prompt('are you sure?(press "y" to confirm)');
    if (a == "y") {
        products.splice(index, 1);
    }
    resetForm();
    printData(products);
}
function editRow(index) {
    let product = products[index];
    let productName = document.getElementById('p-name');
    productName.value = product.name;
    let productQuantity = document.getElementById('p-quantity');
    productQuantity.value = product.quantity;
    let productPrice = document.getElementById('p-price');
    productPrice.value = String(product.price);
    let productSku = document.getElementById('p-sku');
    productSku.value = String(product.sku);
    let productDescription = document.getElementById('p-desc');
    productDescription.value = product.description;
    editIndex = index;
}
function resetForm() {
    let productName = document.getElementById('p-name');
    productName.value = "";
    let productQuantity = document.getElementById('p-quantity');
    productQuantity.value = "";
    let productPrice = document.getElementById('p-price');
    productPrice.value = "";
    let productSku = document.getElementById('p-sku');
    productSku.value = "";
    let productDescription = document.getElementById('p-desc');
    productDescription.value = "";
    document.getElementById('submit-btn').innerText = "Submit";
    editIndex = null;
}
function searchData() {
    let searchInput = document.getElementById('search');
    let fProducts = products.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
    console.log(fProducts);
    if (searchInput.value !== "") {
        printData(fProducts);
    }
    else {
        printData(products);
    }
    searchInput.addEventListener('input', () => {
        if (searchInput.value === "") {
            printData(products);
        }
    });
}
