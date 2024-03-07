var editIndex = null;
var products = [];
function validate() {
    var productName = document.getElementById('p-name');
    var productQuantity = document.getElementById('p-quantity');
    var productPrice = document.getElementById('p-price');
    var productSku = document.getElementById('p-sku');
    var productDescription = document.getElementById('p-desc');
    // name
    var spaceRegex = /^[^ ]/;
    var twoSpace = /^(?:(?!\s\s).)*$/;
    var numbers = /^([^0-9]*)$/;
    var space = /^[^\s]+$/;
    var hyphen = /-/;
    var specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    var nameError = '';
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
    var onlyNumbers = /^[0-9]+$/;
    var startWithZero = /^[1-9]\d*$/;
    var quantityError = '';
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
    var priceError = "";
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
    var skuError = '';
    var specialCharacter = /^[^!@#$%^&*()_+={}[\]:;<>,.?/~`\\|"' ]+$/;
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
    var descError = "";
    if (productDescription.value === "") {
        descError = "Description cannot be empty";
    }
    var a = document.getElementById('reg-p-name');
    a.innerHTML = nameError;
    var b = document.getElementById('reg-p-quantity');
    b.innerHTML = quantityError;
    var c = document.getElementById('reg-p-price');
    c.innerHTML = priceError;
    var d = document.getElementById('reg-p-sku');
    d.innerHTML = skuError;
    var e = document.getElementById('reg-p-desc');
    e.innerHTML = descError;
    return nameError === '' && quantityError === '' && priceError === '' && skuError === '' && descError == '';
}
function getData() {
    if (!validate()) {
        return;
    }
    var productName = document.getElementById('p-name');
    var productQuantity = document.getElementById('p-quantity');
    var productPrice = document.getElementById('p-price');
    var productSku = document.getElementById('p-sku');
    var productDescription = document.getElementById('p-desc');
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
        var productObj = {
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
    var productName = name.toString();
    var regPName = document.getElementById('reg-p-name');
    if (products.some(function (product) { return product.name.toLowerCase() === productName.toLowerCase(); })) {
        regPName.textContent = "Name already exists";
        return true;
    }
    regPName.textContent = ""; // Clear the message if the name is valid
    return false;
}
function printData(products) {
    var tableBody = document.getElementById('values');
    tableBody.innerHTML = "";
    products.map(function (value, index) {
        var newRow = "<tr>   \n                    <td>".concat(index + 1, "</td>\n                    <td>").concat(value.name, "</td>\n                    <td>").concat(value.quantity, "</td>\n                    <td>").concat(value.price, "</td>\n                    <td>").concat(value.sku, "</td>\n                    <td>").concat(value.description, "</td>\n                    <td><button onclick=\"editRow(").concat(index, ")\" id=\"edit\">Edit</button><button onclick=\"deleteRow(").concat(index, ")\" id=\"delete\">Delete</button></td>\n                </tr>");
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
    var product = products[index];
    var productName = document.getElementById('p-name');
    productName.value = product.name;
    var productQuantity = document.getElementById('p-quantity');
    productQuantity.value = product.quantity;
    var productPrice = document.getElementById('p-price');
    productPrice.value = product.price;
    var productSku = document.getElementById('p-sku');
    productSku.value = product.sku;
    var productDescription = document.getElementById('p-desc');
    productDescription.value = product.description;
    editIndex = index;
}
function resetForm() {
    var productName = document.getElementById('p-name');
    productName.value = "";
    var productQuantity = document.getElementById('p-quantity');
    productQuantity.value = "";
    var productPrice = document.getElementById('p-price');
    productPrice.value = "";
    var productSku = document.getElementById('p-sku');
    productSku.value = "";
    var productDescription = document.getElementById('p-desc');
    productDescription.value = "";
    document.getElementById('submit-btn').innerText = "Submit";
    editIndex = null;
}
function searchData() {
    var searchInput = document.getElementById('search');
    var fProducts = products.filter(function (item) {
        return item.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
    console.log(fProducts);
    if (searchInput.value !== "") {
        printData(fProducts);
    }
    else {
        printData(products);
    }
    searchInput.addEventListener('input', function () {
        if (searchInput.value === "") {
            printData(products);
        }
    });
}
