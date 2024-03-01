let products = [];
let edit = null;
let weightFlag = true;
let companyFlag = true;


function validate(){
    let productId = document.getElementById('id').value;
    let productPartNo = document.getElementById('partno').value;
    let productName = document.getElementById('name').value;
    let productSize = document.querySelector('input[name="size"]:checked');
    let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    let productDesc = document.getElementById('description').value;
    let productWeight = document.getElementById('weight').value;
    let companyName = document.getElementById('company').value;
    let companyAdd = document.getElementById('company-add').value;
    let companyDate = document.getElementById('date').value;


    // validation regular expressions
    let pattern = /^(?![\s\d])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
    let pattern1 = /^[+-]?[0-9]+$/
    let spaceRegex = /^[^ ]/;
    let twoSpace = /^(?:(?!\s\s).)*$/;
    let numbers = /^([^0-9]*)$/;
    let specialCharacters = /^[a-zA-Z0-9_]+$/;
    let space = /^[^\s]+$/;
    let hyphen = /[-]/;


    // id
    let idError = "";
    if(!pattern1.test(productId)){
        idError = "input cannot be empty and special characters cannot be used  "
    }
    if(productId<0){
        idError="ID cannot be negetive";
    }
    else if(productId>10000){
        idError="Id should be less than 10000"
    }
    


    // partno
    let partError = "";

    if(productPartNo == "") {
        partError = "Input Field Empty";
        console.log("hey")
    }
    else if(hyphen.test(productPartNo.toString())){
        partError = "invalid input"
        console.log("hello")
    }
    else if(!specialCharacters.test(productPartNo)){
        partError = "special characters not allowed"
    }
    else if(!startWithZero.test(productPartNo)){
        partError = "Quantity should not start with zero.";
    }
    else if(productPartNo < 1){
        partError = "only positive numbers are allowed";
    }
    else if(!spaceRegex.test(productPartNo)){
        partError = "field should not start with a blank space";
    }
    else if(!space.test(productPartNoy)){
        partError = "cannot have space between numbers";
    }
    else if(!onlyNumbers.test(productPartNo)){
        partError = "only numbers are required for this field";
    }
    else if(productPartNo>10000){
        partError = "quantity should be less than 10000.";
    }

    // name
    let nameError = '';
    if(productName === ""){
        nameError = "Name field is empty";  
    }
    else if(hyphen.test(productName)){
        nameError = "hyphens are not allowed in this form."
    }
    else if(!spaceRegex.test(productName)){
        nameError = "Product name should not start with a blank space";
    }
    else if (!twoSpace.test(productName)){
        nameError = "Product name should not have more than one space in between";
    }
    else if(!numbers.test(productName)){
        nameError = "numbers should not be present"
    }
    else if(!specialCharacters.test(productName)){
        nameError = "special characters are not allowed"
    }

    // checkbox
    let colorError = "";
    if(productColor.length === 0){
        colorError = "product cannot be colorless";
    }

    // radio button
    let sizeError = "";
    if(!productSize){
        sizeError="please select a size";
    }

    // description
    let descError = "";
    if(productDesc === ""){
        descError="Input Empty";
    }

    // weight
    let weightError="";
    if(!pattern1.test(productWeight) && weightFlag == false){
        weightError="invalid input";
        weightFlag=true;
    }
    else if(productWeight<0 && weightFlag == false){
        weightError="weight cannot be negetive";
        weightFlag = true;
    }
    else if(productWeight == 0 && weightFlag == false){
        weightError = "Weight cannot be zero";
        weightFlag = true
    }
    else if(productWeight>1000 && weightFlag == false){
        weightError="weight connot be more than 1000";
        weightFlag=true;
    }

    // company details
        // company name
        let companyNameError = "";
        if(companyName === "" && companyFlag == false){
            companyNameError = "Name field is empty";
            companyFlag = true;
        } 
        else if(!pattern.test(productName) && companyFlag == false){
            companyNameError = "invalid input";
            companyFlag = true;
        }


        // company address
        let companyAddressError = "";
        if(companyAdd === "" && companyFlag == false){
            companyAddressError = "input empty";
            companyFlag = true;
        }

        // company date
        let companyDateError = "";
        if(companyDate === "" && companyFlag == false){
            companyDateError="invalid input"
            companyFlag = true;
        }
    
    document.getElementById('p-id').innerHTML=idError;
    document.getElementById('p-partno').innerHTML=partError;
    document.getElementById('p-name').innerHTML=nameError;
    document.getElementById('color').innerHTML=colorError;
    document.getElementById('size').innerHTML=sizeError;
    document.getElementById('p-description').innerHTML=descError;
    document.getElementById('p-weight').innerHTML=weightError;
    document.getElementById('c-name').innerHTML=companyNameError;
    document.getElementById('c-add').innerHTML=companyAddressError;
    document.getElementById('c-date').innerHTML=companyDateError;
    
    return idError === "" && partError === "" && nameError === "" && colorError === "" && sizeError === "" && descError === "" && weightError === "" && companyNameError === "" && companyAddressError === "" && companyDateError === "";
}

function check(name) {
    let pName = name;
    console.log(pName);
    const existsName = products.some((item)=>item.name.toLowerCase() === pName.toLowerCase());
    if (existsName) {
        document.getElementById('p-name').innerHTML = "Data already exists";
    }
    return existsName;
}




function getData(){
    if(!validate()){
        return;
    }
    
    // weight form
    document.getElementById('weight').style.display="none";
    document.getElementById('w-btn').style.display="block";
    document.getElementById('d-btn').style.display="none";
    document.getElementById('p-weight').style.display="none";

   



    // company form
    document.getElementById('company').style.display="none";
    document.getElementById('company-add').style.display="none";
    document.getElementById('date').style.display="none";
    document.getElementById('c-btn').style.display="block";
    document.getElementById('cd-btn').style.display="none";
    document.getElementById('c-name').style.display="none";
    document.getElementById('c-add').style.display="none";
    document.getElementById('c-date').style.display="none";


    let productId = document.getElementById('id').value;
    let productPartNo = document.getElementById('partno').value;
    let productName = document.getElementById('name').value;
    let productSize = document.querySelector('input[name="size"]:checked').value;
    let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    let pColor = Array.from(productColor).map(item => item.value)
    let productDesc = document.getElementById('description').value;
    let productWeight = document.getElementById('weight').value;
    let companyDetails = [];
    let companyName = document.getElementById('company').value;
    let companyAdd = document.getElementById('company-add').value;
    let companyDate = document.getElementById('date').value;
    companyDetails.push(companyName);
    companyDetails.push(companyAdd);
    companyDetails.push(companyDate);


    // if(check(productName)){
    //     return;
    // }
    


    if(edit !== null){
        products[edit].id = productId;
        products[edit].partno = productPartNo;
        products[edit].name = productName;
        products[edit].size = productSize;
        products[edit].color = pColor;
        products[edit].desc = productDesc;
        products[edit].weight = productWeight;
        products[edit].company = companyDetails
        edit = null;
    }
    else{

        if(check(productName)){
            return;
        }

        let productObj = {
            id: productId,
            partno: productPartNo,
            name: productName,
            size: productSize,
            color: pColor,
            desc: productDesc,
            weight: productWeight,
            company: companyDetails
            };
        products.push(productObj);
    }
    resetForm();
    printData(products);
}


function printData(products){
    let table = document.getElementById('content');
    table.innerHTML="";
    products.map((item,index)=>{
        let newRow = `
                    <tr>
                        <td>${index+1}</td>
                        <td>${item.id}</td>
                        <td>${item.partno}</td>
                        <td>${item.name}</td>
                        <td>${item.size}</td>
                        <td>${item.color}</td>
                        <td>${item.desc}</td>
                        <td>${item.weight}</td>
                        <td>${item.company[0]}<br>
                            ${item.company[1]}<br>
                            ${item.company[2]}
                        </td>
                    </tr>
                        `
        table.innerHTML+=newRow;
    });
}

function resetForm(){
    document.getElementById('id').value = "";
    document.getElementById('partno').value = "";
    document.getElementById('name').value = "";
    document.querySelector('input[name="size"]:checked').checked = false;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.getElementById('description').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('company').value="";
    document.getElementById('company-add').value="";
    edit = null;
}






// removing product by name and id
function removeName(){
    let pName = prompt("enter name")
    // let arrName = products.filter((item)=>{return item.name !== pName})
    // if(arrName.length>0){
    //     printData(arrName)
    // }
    // else{
        //     console.log('name not found')
    //     printData(products)
    // }
    let arrName = products.map((item)=>item.name)
    let index = arrName.indexOf(pName);
    if(index !== -1){
        products.splice(index, 1);
        printData(products)
    }else{
        alert('name not found');
        printData(products)
    }
}


function removeId(){
    let pId = prompt("enter id");
    let arrId = products.map((item=>item.id))
    console.log(pId)
    console.log(arrId)
    let index = arrId.indexOf(pId);
    if(index !== -1){
        products.splice(index,1)
        printData(products)
    }else{
        alert('id not found')
        printData(products)
    }
}


// modifying product by name and id
function modifyName(){
    let mName = prompt("enter name:");
    let arrName = products.filter((item,index)=>{
        edit = index;
        return item.name === mName
    });
    if(arrName.length>0){
        document.getElementById('id').value=arrName[0].id;
        document.getElementById('partno').value=arrName[0].partno;
        document.getElementById('name').value=arrName[0].name;
        
        let sizeRadio = document.querySelector(`input[name="size"][value="${arrName[0].size}"]`);
        if (sizeRadio) {
            sizeRadio.checked = true;
        }
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = arrName[0].color.includes(checkbox.value);
        });
        
        
        document.getElementById('description').value=arrName[0].desc;
        document.getElementById('weight').value=arrName[0].weight;
        document.getElementById('company').value=arrId[0].company[0];
        document.getElementById('company-add').value=arrId[0].company[1];
        document.getElementById('date').value=arrId[0].company[2];

        
    }
    else{
        alert('name not found')
    }
}

function modifyId(){
    let mId = prompt("Enter Product id");
    let arrId = products.filter((item,index)=>{
        edit = index;
        return item.id === mId
    });
    console.log(mId)
    console.log(arrId)
    if(arrId.length>0){
        document.getElementById('id').value=arrId[0].id;
        document.getElementById('partno').value=arrId[0].partno;
        document.getElementById('name').value=arrId[0].name;
        
        let sizeRadio = document.querySelector(`input[name="size"][value="${arrId[0].size}"]`);
        if (sizeRadio) {
            sizeRadio.checked = true;
        }
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = arrId[0].color.includes(checkbox.value);
        });
        
        
        document.getElementById('description').value=arrId[0].desc;
        document.getElementById('weight').value=arrId[0].weight;
        document.getElementById('company').value=arrId[0].company[0];
        document.getElementById('company-add').value=arrId[0].company[1];
        document.getElementById('date').value=arrId[0].company[2];
        
    }
    else{
        alert("ID not found!");
    }
}

function sort(){
    let sel = document.getElementById('select').value;
    
    switch(sel){
        case "normal":
            products
            break;
        case "id":
            products.sort((x,y)=> x.id - y.id);
            break;
        case "descid":
            products.sort((x,y) => y.id - x.id);
            break;
        case "partno":
            products.sort((x,y) => x.partno - y.partno);
            break;
        case "descpart":
            products.sort((x,y) => y.partno - x.partno);
            break;
        case "name":
            products.sort()
            break;
    }
    printData(products)
}


function searchData(){
    let searchInput = document.getElementById('search').value;
    let fProducts = products.filter((item)=>{
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    if(searchInput!==""){
        printData(fProducts);
    }else{
        printData(products);
    }
}

function addWeight(){
    document.getElementById('weight').style.display='block';
    document.getElementById('w-btn').style.display="none";
    document.getElementById('d-btn').style.display="block";
    document.getElementById('p-weight').style.display="block";
    weightFlag = false;
}


function wDone(){
    document.getElementById('weight').style.display="none";
    document.getElementById('w-btn').style.display="block";
    document.getElementById('d-btn').style.display="none";
    document.getElementById('p-weight').style.display="none";
    document.getElementById('weight').value="";
}



function addCompany(){
    document.getElementById('company').style.display="block";
    document.getElementById('company-add').style.display="block";
    document.getElementById('date').style.display="block";
    document.getElementById('c-btn').style.display="none";
    document.getElementById('cd-btn').style.display="block";
    document.getElementById('c-name').style.display="block";
    document.getElementById('c-add').style.display="block";
    document.getElementById('c-date').style.display="block";
    companyFlag = false;
}

function cDone(){
    document.getElementById('company').style.display="none";
    document.getElementById('company-add').style.display="none";
    document.getElementById('date').style.display="none";
    document.getElementById('c-btn').style.display="block";
    document.getElementById('cd-btn').style.display="none";
    document.getElementById('c-name').style.display="none";
    document.getElementById('c-add').style.display="none";
    document.getElementById('c-date').style.display="none";
    document.getElementById('company').value="";
    document.getElementById('company-add').value="";
    document.getElementById('date').value="";
}




