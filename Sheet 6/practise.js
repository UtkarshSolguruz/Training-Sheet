const obj = {
    "id":"d0328732-28a3-4d8b-8cbe-db463e3ce312",
    "image":"2b3da5c7-09bc-45aa-b0a6-be3378516519.jpg",
    "internal_path":"product/",
    "external_path":"product/",
    "base_url":"https://kf-dev-assets.s3.ap-southeast-2.amazonaws.com/",
    "name":"Apple",
    "sku":"123456",
    "weight":1,
    "product_unit":"kg",
    "category":"Fruits",
    "supplier":"Fresh Fruits",
    "minimum_stock":5,
    "remaining_quantity":91,
    "stock_status":"in_stock",
    "inventory_detail":[
       {
          "id":"05ca6c1d-f535-4b04-a28e-5c5fae525e20",
          "remaining_quantity":1,
          "created_at":"2024-02-27T12:16:39.634441+00:00",
          "quantity_detail":[
             {
                "id":"22241480-7f48-4c6f-8912-d578df2d7cd0",
                "remaining_quantity":1,
                "expiry_date":"2024-03-29"
             }
          ]
       },
       {
          "id":"38d8a681-d491-4e80-a11e-bf79967645bd",
          "remaining_quantity":80,
          "created_at":"2024-02-27T12:17:34.676513+00:00",
          "quantity_detail":[
             {
                "id":"ac8e4bf3-ae3f-4b17-8288-5f6744b3c492",
                "remaining_quantity":80,
                "expiry_date":"2024-03-25"
             }
          ]
       },
       {
          "id":"8a459282-da35-4574-8d93-8b0de2cb53bc",
          "remaining_quantity":10,
          "created_at":"2024-02-28T12:29:17.484502+00:00",
          "quantity_detail":[
             {
                "id":"75a738ce-0862-43da-9c50-4a444281dc9e",
                "remaining_quantity":10,
                "expiry_date":"2024-03-02"
             }
          ]
       }
    ]
}


const json = {
  id: "d0328732-28a3-4d8b-8cbe-db463e3ce312",
  image: "2b3da5c7-09bc-45aa-b0a6-be3378516519.jpg",
  internal_path: "product/",
  external_path: "product/",
  base_url: "https://kf-dev-assets.s3.ap-southeast-2.amazonaws.com/",
  name: "Apple",
  sku: "123456",
  weight: 1,
  product_unit: "kg",
  category: "Fruits",
  supplier: "Fresh Fruits",
  minimum_stock: 5,
  remaining_quantity: 91,
  stock_status: "in_stock",
  inventory_detail: [
    {
      id: "05ca6c1d-f535-4b04-a28e-5c5fae525e20",
      remaining_quantity: 1,
      created_at: "2024-02-27T12:16:39.634441+00:00",
      quantity_detail: [
        {
          id: "22241480-7f48-4c6f-8912-d578df2d7cd0",
          remaining_quantity: 1,
          expiry_date: "2024-03-29",
        },
      ],
    },
    {
      id: "38d8a681-d491-4e80-a11e-bf79967645bd",
      remaining_quantity: 80,
      created_at: "2024-02-27T12:17:34.676513+00:00",
      quantity_detail: [
        {
          id: "ac8e4bf3-ae3f-4b17-8288-5f6744b3c492",
          remaining_quantity: 80,
          expiry_date: "2024-03-25",
        },
      ],
    },
    {
      id: "8a459282-da35-4574-8d93-8b0de2cb53bc",
      remaining_quantity: 10,
      created_at: "2024-02-28T12:29:17.484502+00:00",
      quantity_detail: [
        {
          id: "75a738ce-0862-43da-9c50-4a444281dc9e",
          remaining_quantity: 10,
          expiry_date: "2024-03-02",
        },
      ],
    },
  ],
};


const img_url = "https://kf-dev-assets.s3.ap-southeast-2.amazonaws.com/product/2b3da5c7-09bc-45aa-b0a6-be3378516519.jpg";
let image = document.getElementById('images')
image.src = img_url
image.width = 70;

document.getElementById('display1').innerHTML=`
    <tr>
      <td>${json.name}</td>
      <td>${json.sku}</td>
      <td>${json.weight} Kg</td>
    </tr>
  `


document.getElementById('display2').innerHTML=`
  <tr>
    <td>${json.category}</td>
    <td>${json.supplier}</td>
    <td>${json.remaining_quantity}</td>
  </tr>
`

document.getElementById('display3').innerHTML=`
  <tr>
    <td>${json.minimum_stock}</td>
    <td>${json.stock_status}</td>
  </tr>
`




function printData(){
  

  let table = document.getElementById('content');
  table.innerHTML="";  
  for(let i = 0; i<json.inventory_detail.length;i++){
    let a = json.inventory_detail[i].quantity_detail;
    let expire = a.map((item)=>item.expiry_date)
    let b = a.reduce((total,item)=>total + item.remaining_quantity, 0)
    let newRow = `<tr>  
                    <td>${i+1}</td>
                    <td>${b}</td>
                    <td>${json.inventory_detail[i].created_at.split('T')[0]}</td>
                    <td>${expire}</td>
                  </tr>`
    table.innerHTML+=newRow;
  }

}

printData()


