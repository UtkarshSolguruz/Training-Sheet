let products = [];
let edit = null;


// function validate(){
    // let productId = document.getElementById('id').value;
    // let productPartNo = document.getElementById('partno').value;
    // let productName = document.getElementById('name').value;
    // // let productSize = document.querySelector('input[name="size"]:checked').value;
    // let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    // let color = Array.from(productColor).map(item => item.value)



//     // validation regular expressions
//     let startSpace = /^[^ ]/;
//     let twoSpace = /^(?:(?!\s\s).)*$/;
//     let numbers = /^([^0-9]*)$/
//     let specialCharacters = /^[a-zA-Z0-9_]+$/;
//     let space = /^[^\s]+$/;
//     let hyphen = /^(?!0\d)\d+$/;


//     // id
//     let idError = "";
//     if(productId === ""){
//         idError = "input empty.";
//     }


//     // partno
//     let partError = "";
//     if(productPartNo === ""){
//         partError = 'input empty.';
//     }

//     // name
//     let nameError = "";
//     if(productName === ""){
//         nameError="Input Empty.";
//     }
//     else if(!startSpace.test(productName)){
//         nameError="Name should not start with space.";
//     }
//     else if(!twoSpace.test(productName)){
//         nameError="more than one black space in between.";
//     }
//     else if(!specialCharacters.test(productName)){
//         nameError="special characters aren't welcome here.";
//     }
//     else if(!numbers.test(productName)){
//         nameError="numbers aren't required for names.";
//     }
    
//     document.getElementById('p-id').innerHTML=idError;
//     document.getElementById('p-partno').innerHTML=partError;
//     document.getElementById('p-name').innerHTML=nameError;
    
//     return idError === "" && partError === "" && nameError === "";
// }



function getData(){

    document.getElementById('weight').style.display="none";
    document.getElementById('w-btn').style.display="block";
    document.getElementById('d-btn').style.display="none";



    let productId = document.getElementById('id').value;
    let productPartNo = document.getElementById('partno').value;
    let productName = document.getElementById('name').value;
    let productSize = document.querySelector('input[name="size"]:checked').value;
    let productColor = document.querySelectorAll('input[type="checkbox"]:checked');
    let pColor = Array.from(productColor).map(item => item.value)
    let productDesc = document.getElementById('description').value;
    let productWeight = document.getElementById('weight').value;


    let productObj = {
        id: productId,
        partno: productPartNo,
        name: productName,
        size: productSize,
        color: pColor,
        desc: productDesc,
        weight: productWeight
    };
    products.push(productObj);
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
                    </tr>
                        `
        table.innerHTML+=newRow;
    })
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
        console.log('name not found')
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
        console.log('id not found')
        printData(products)
    }
}



// modifying product by name and id
function modifyName(){
    let mName = prompt("enter name:");
    let arrName = products.filter((item)=>{return item.name === mName});
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
    }
    else{
        console.log('name not found')
    }
}





function addWeight(){
    document.getElementById('weight').style.display='block';
    document.getElementById('w-btn').style.display="none";
    document.getElementById('d-btn').style.display="block";
}


function wDone(){
    document.getElementById('weight').style.display="none";
    document.getElementById('w-btn').style.display="block";
    document.getElementById('d-btn').style.display="none";
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