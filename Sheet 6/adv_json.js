let products = [];
let edit = null;
let count = null;
let weightFlag = true;
let companyFlag = true;
let counterObj = {};
let sortArr = [];


function validate(){
    let productId = document.getElementById('id');
    let productPartNo = document.getElementById('partno').value;
    let productName = document.getElementById('name').value;
    let productSize = document.querySelector('input[name="size"]:checked');
    let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    let productDesc = document.getElementById('description').value;
    let productWeight = document.getElementById('weight').value;
    let companyName = document.getElementById('company').value;
    let companyAdd = document.getElementById('company-add').value;
    let companyDate = document.getElementById('date').value;
    let productCounter = document.getElementById('counter').value;


    // validation regular expressions
    // let pattern = /^(?![\s\d])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
    // let pattern1 = /^[+-]?[0-9]+$/
    // let spaceRegex = /^[^ ]/;
    // let twoSpace = /^(?:(?!\s\s).)*$/;
    // let numbers = /^([^0-9]*)$/;
    // let specialCharacters = /^[a-zA-Z0-9_]+$/;
    // let space = /^[^\s]+$/;
    // let hyphen = /[-]/;
    // let regex = /^[0-9]+$/



    // counter
    let counterError="";
    if(productCounter === ""){
        counterError="input empty.";
    }

    let idError=""
    if(productId === ""){
        idError="input empty";
    }


    // partno
    let partError = "";

    if(productPartNo == "") {
        partError = "Input Field Empty";
    }
    // else if(hyphen.test(productPartNo.toString())){
    //     partError = "invalid input"
    //     console.log("hello")
    // }
    // else if(!specialCharacters.test(productPartNo)){
    //     partError = "special characters not allowed"
    // }
    // else if(productPartNo < 1){
    //     partError = "only positive numbers are allowed";
    // }
    // else if(!spaceRegex.test(productPartNo)){
    //     partError = "field should not start with a blank space";
    // }
    // else if(!space.test(productPartNo)){
    //     partError = "cannot have space between numbers";
    // }
    // else if(productPartNo>10000){
    //     partError = "quantity should be less than 10000";
    // }

    // name
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
    if(productWeight === "" && weightFlag == false){
        weightError="input empty."
    }
    // if(!pattern1.test(productWeight) && weightFlag == false){
    //     weightError="invalid input";
    //     weightFlag=true;
    // }
    // else if(productWeight<0 && weightFlag == false){
    //     weightError="weight cannot be negetive";
    //     weightFlag = true;
    // }
    // else if(productWeight == 0 && weightFlag == false){
    //     weightError = "Weight cannot be zero";
    //     weightFlag = true
    // }
    // else if(productWeight>1000 && weightFlag == false){
    //     weightError="weight connot be more than 1000";
    //     weightFlag=true;
    // }

    // company details
        // company name
        let companyNameError = "";
        if(companyName === "" && companyFlag == false){
            companyNameError = "Name field is empty";
            companyFlag = true;
        } 
        // else if(!pattern.test(productName) && companyFlag == false){
        //     companyNameError = "invalid input";
        //     companyFlag = true;
        // }


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
    
    document.getElementById('p-counter').innerHTML=counterError
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
    
    return idError === "" && partError === "" && nameError === "" && colorError === "" && sizeError === "" && descError === "" && weightError === "" && companyNameError === "" && companyAddressError === "" && companyDateError === "" && counterError === "";
}



    // id
    let productId = document.getElementById('id');
    let pIdError = document.getElementById('p-id');
            productId.addEventListener('keypress',(e)=>{
                if(e.which>47 && e.which<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    pIdError.innerHTML="only numbers allowed";
                }
            productId.addEventListener('input',()=>{
                if(productId.value === ""){
                    pIdError.innerHTML="";
                }
            })
    });


    // partno
    let productPartNo = document.getElementById('partno');
    let partNoError = document.getElementById('p-partno');
            productPartNo.addEventListener('keypress',(e)=>{
                if(e.which>47 && e.which<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    partNoError.innerHTML="only numbers allowed";
                }
            productPartNo.addEventListener('input',()=>{
                if(productPartNo.value === ""){
                    partNoError.innerHTML="";
                }
            })
    });

    // counter
    let productCounter = document.getElementById('counter');
    let productCounterError = document.getElementById('p-counter');
            productCounter.addEventListener('keypress',(e)=>{
                if(e.which>47 && e.which<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    productCounterError.innerHTML="only numbers allowed";
                }
            productCounter.addEventListener('input',()=>{
                if(productCounter.value === ""){
                    productCounterError.innerHTML="";
                }
            })
    });


    // weight
    let productWeight = document.getElementById('weight');
    let productWeightError = document.getElementById('p-weight');
            productWeight.addEventListener('keypress',(e)=>{
                if(e>47 && e<58){
                    console.log('yes')
                }
                else{
                    console.log('no')
                    productWeightError.innerHTML="only numbers allowed";
                }
            productWeight.addEventListener('input',()=>{
                if(productWeight.value === ""){
                    productWeightError.innerHTML="";
                }
            })
    });



    // name
    let productName = document.getElementById('name');
    let nameError = document.getElementById('p-name');

    productName.addEventListener('keypress', (e) => {
        if ((e >= 65 && e <= 90) || (e >= 97 && e <= 122)) {
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


    // company name
    let companyName = document.getElementById('company');
    let companyNameError = document.getElementById('c-name');

    companyName.addEventListener('keypress', (e) => {
        if ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)) {
            console.log('yes');
        } else {
            console.log('no');
            companyNameError.innerHTML = "Only alphabets allowed";
        }
    });

    companyName.addEventListener('input', () => {
        if (/^[a-zA-Z]*$/.test(companyName.value)) {
            companyNameError.innerHTML = "";
        }
    });


// function checkName(name) {
//     let pName = name;
//     for(let i in counterObj){
//         const existsName = counterObj[i].some((item)=>item.name.toLowerCase() === pName.toLowerCase());   
//         if (existsName) {
//             document.getElementById('p-name').innerHTML = "Name already exists";
//         }
//         return existsName;
//     }
// }


// function checkId(id){
//     let pId = id;
//     for(let i in counterObj){
//     const existsId = counterObj[i].some((item)=>item.id === pId)
//         if(existsId){
//             document.getElementById('p-id').innerHTML = "Id already exists";
//         } 
//     return existsId;
//     }
// }


function checkName(name, count, edit) {
    for (let i in counterObj) {
        if (i !== count) {
            const existsName = counterObj[i].some((item, index) => {
                return index !== edit && item.name.toLowerCase() === name.toLowerCase();
            });

            if (existsName) {
                return true; 
            }
        }
    }
    return false; 
}


function checkId(id, count, editIndex) {
    for (let i in counterObj) {
        if (i !== counter) {
            const existsId = counterObj[i].some((item, index) => {
                return index !== editIndex && item.id === id;
            });

            if (existsId) {
                return true;
            }
        }
    }
    return false; 
}




function getData(){
    if(!validate()){
        return;
    }



    // counter
    document.getElementById('counter').disabled = false;
    
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

    let productCounter = document.getElementById('counter').value;
    let productId = document.getElementById('id').value;
    let productPartNo = document.getElementById('partno').value;
    let productName = document.getElementById('name').value;
    let productSize = document.querySelector('input[name="size"]:checked').value;
    let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    let pColor = Array.from(productColor).map(item => item.value)
    let productDesc = document.getElementById('description').value;
    let productWeight = document.getElementById('weight').value;
    let companyName = document.getElementById('company').value;
    let companyAdd = document.getElementById('company-add').value;
    let companyDate = document.getElementById('date').value;
    let companyDetails = {
        cname: companyName,
        cadd: companyAdd,
        cdate: companyDate
    }

    
    if(checkName(productName,count,edit)){
        document.getElementById('p-name').innerHTML="name already exists";
        return;
    }

    if(checkId(productId,count,edit)){
        document.getElementById('p-id').innerHTML="ID already exists";
        return;
    }

    
    if(edit !== null && count !== null){        
        counterObj[count][edit].id = productId;
        counterObj[count][edit].partno = productPartNo;
        counterObj[count][edit].name = productName;
        counterObj[count][edit].size = productSize;
        counterObj[count][edit].color = pColor;
        counterObj[count][edit].desc = productDesc;
        counterObj[count][edit].weight = productWeight;
        counterObj[count][edit].company = companyDetails
        edit = null;
        count = null;
    }
    else{
        
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
        


        let key = productCounter;
        if(counterObj[key]){
            counterObj[key] = [...counterObj[key],productObj]
        }
        else{
            counterObj[key] = [productObj];
        }

        // console.log(counterObj)

    }
    resetForm();
    printData(counterObj);
}





function printData(counterObj){
    let table = document.getElementById('content');
    table.innerHTML="";
    for(let i in counterObj){
        for(let j of counterObj[i]){
            let newRow = `
            <tr>
                <td>${i}</td>
                <td>${j.id}</td>
                <td>${j.partno}</td>
                <td>${j.name}</td>
                <td>${j.size}</td>
                <td>${j.color}</td>
                <td>${j.desc}</td>
                <td>${j.weight}</td>
                <td>${j.company.cname}<br>
                    ${j.company.cadd}<br>
                    ${j.company.cdate}
                </td>
            </tr>
                `
        table.innerHTML+=newRow;
        }
    }
}


// function printData1(products){
//     let tableBody = document.getElementById('values');
//     tableBody.innerHTML="";
//         products.map((value, index)=>{
//                 let newRow = `<tr>   
//                     <td>${index+1}</td>
//                     <td>${value.name}</td>
//                     <td>${value.quantity}</td>
//                     <td>${value.price}</td>
//                     <td>${value.sku}</td>
//                     <td>${value.description}</td>
//                     <td><button onclick="editRow(${index})" id="edit">Edit</button><button onclick="deleteRow(${index})" id="delete">Delete</button></td>
//                 </tr>`
//         tableBody.innerHTML+=newRow;
//         });  
//     }


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
    document.getElementById('counter').value="";
    edit = null;
}






// removing product by name and id
function removeName(){
    let pName = prompt("enter name");    
    for(let i in counterObj){
        for(let j of counterObj[i]){
            if(pName === null){
                return;
            }
            else if(pName === j.name){
                counterObj[i].splice(j, 1)
                printData(counterObj)
            }
            else{
                alert('name not found')
                printData(counterObj)
            }
        }
    }
}


function removeId(){
    let pId = prompt("enter id");
    for(let i in counterObj){
        for(let j of counterObj[i]){
            if(pId === null){
                return;
            }
            else if(pId === j.id){
                counterObj[i].splice(j, 1)
                printData(counterObj)
            }
            else{
                alert('Id not found')
                printData(counterObj)
            }
        }
    }
}




// modifying product by name and id
function modifyName(){
    let mName = prompt("enter name:");
    for(let i in counterObj){
        for(let j of counterObj[i]){
            if(mName === j.name){
                document.getElementById('id').value=j.id;
                document.getElementById('name').value=j.name;
                document.getElementById('partno').value=j.partno;
                let sizeRadio = document.querySelector(`input[name="size"][value="${j.size}"]`);
                if (sizeRadio) {
                    sizeRadio.checked = true;
                }
                let checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = j.color.includes(checkbox.value);
                });                
                document.getElementById('description').value=j.desc;
                document.getElementById('weight').value=j.weight;
                document.getElementById('company').value=j.company.cname;
                document.getElementById('company-add').value=j.company.cadd;
                document.getElementById('date').value=j.company.cdate;
                document.getElementById('counter').value=i;   
                document.getElementById('counter').disabled = true;             
            }
            for(let i in counterObj){
                counterObj[i].map((item,index)=>{
                    count = i;
                    edit = index;
           })
        }
    }   
}
}

function modifyId(){
    let mId = prompt("Enter Product id");
    for(let i in counterObj){
        for(let j of counterObj[i]){
            if(mId === j.id){
                document.getElementById('id').value=j.id;
                document.getElementById('name').value=j.name;
                document.getElementById('partno').value=j.partno;
                let sizeRadio = document.querySelector(`input[name="size"][value="${j.size}"]`);
                if (sizeRadio) {
                    sizeRadio.checked = true;
                }
                let checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = j.color.includes(checkbox.value);
                });                
                document.getElementById('description').value=j.desc;
                document.getElementById('weight').value=j.weight;
                document.getElementById('company').value=j.company.cname;
                document.getElementById('company-add').value=j.company.cadd;
                document.getElementById('date').value=j.company.cdate;
                document.getElementById('counter').value=i;   
                document.getElementById('counter').disabled = true;             
            }
            for(let i in counterObj){
                counterObj[i].map((item,index)=>{
                    count = i;
                    edit = index;
                })
            }
        }
    } 
}






function sort() {
    let sorting = document.getElementById("select").value;
  
    for (const i in counterObj) {
        switch (sorting) {
            case "id":
                counterObj[i].sort((x, y) => parseInt(x.id) - parseInt(y.id));
                break;
            case "descid":
                counterObj[i].sort((x, y) => parseInt(y.id) - parseInt(x.id));
                break;
            case "partNo":
                counterObj[i].sort((x, y) => x.partno.localeCompare(y.partno));
                break;
            case "name":
                counterObj[i].sort((x, y) => x.name.localeCompare(y.name));
                break;
            case "descpart":
                counterObj[i].sort((x, y) => y.partno.localeCompare(x.partno));
                break;
            case "descname":
                counterObj[i].sort((x, y) => y.name.localeCompare(x.name));
                break;
        }
    }
    printData(counterObj);
}

  


function searchData() {
    let searchInput = document.getElementById('search').value.toLowerCase();
    let filteredProducts = {};

    for (let i in counterObj) {
        let filteredProductsForKey = counterObj[i].filter(product => {
            return product.name.toLowerCase().includes(searchInput);
        });
        if (filteredProductsForKey.length > 0) {
            filteredProducts[i] = filteredProductsForKey;
        }
    }

    if (searchInput !== "") {
        printData(filteredProducts);
    } else {
        printData(counterObj);
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