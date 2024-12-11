const table=[
    
    {id:"table1",name:"Table-1",total:0,items:{}},
    {id:"table2",name:"Table-2",total:0,items:{}},
    {id:"table3",name:"Table-3",total:0,items:{}},
];

const menuItems=[
    {id:"item1",name:"chicken",price:50.00,type:"mainCourse"},
    {id:"item2",name:"pannerCurry",price:35.00,type:"Starter"},
    {id:"item3",name:"mutton",price:10.00,type:"starter"},
];

document.addEventListener("DOMContentLoaded",()=>{
    renderMenu(menuItems);
   renderTable(table);
});

 function renderMenu(menuItems){
    const menuContainer=document.getElementById("menu-container");
    menuContainer.innerHTML="";
    menuItems.forEach((item)=>{
        const menuItem=document.createElement("div");
        menuItem.className="menu-item";
        menuItem.id=item.id;
        menuItem.draggable=true;
        menuItem.dataset.name=item.name;
        menuItem.dataset.price=item.price;
        menuItem.dataset.type=item.type;

        menuItem.innerHTML= `
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)} - ${item.type}</p>
        
        `; // `` backtiks is used to store the variables in the string format.
        menuContainer.append(menuItem);
     menuItem.addEventListener("dragstart",dragStart);
    });
}

function renderTable(table){
    const tableContainer=document.getElementById("table-container");
    tableContainer.innerHTML="";
    table.forEach((table)=>{
        const tableCard=document.createElement("div");
        tableCard.className="table-card";
        tableCard.id=table.id;
       
        tableCard.innerHTML=`
        <h3>${table.name}</h3>
        <p>Total:${table.total.toFixed(2)}</p>
        <p>items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)} </p>
        
        `;
        tableCard.addEventListener("click",()=>showOrderDetails(table.id));
         tableContainer.append(tableCard);
         tableCard.addEventListener("dragOver",dragOver);
         tableCard.addEventListener("drop",dropItem);
    });
}
 function showOrderDetails(){
    
 }

function dragStart(e){
    e.dataTransfer.setData("text/plain",e.target.id) // dataTransfer = if we want to store the data we will use dataTransfer method the data will be visible in setData.
};

function dragOver(e){
    e.preventDefault(); // allow Drop
}

function dropItem(e){
    
    e.preventDefault();
   
    const itemId=e.dataTransfer.getData("text"); // dataTransfer will get data from dragStart which we will target id the id has a name "text/plain"
      // setData will store the data
      // getData will access the data
    const itemElement=document.getElementById(itemId);

    const itemName=itemElement.dataset.name;
    const itemPrice=parseFloat(itemElement.dataset.price);
    const tableId=e.target.id;

    if (itemName && itemPrice && table.find((table)=> table.id===tableId)){
        addItemToTable(tableId,itemName,itemPrice);
    }
}

function addItemToTable(tableId, itemName, itemPrice){
    const table = table.find((table)=>table.id===tableId);

    if(!table.items[itemName]){
        table.items[itemName]={quantity:0,price:itemPrice};
    }
    table.items[itemName].quantity++;
    table.total=table.total+itemPrice;

    // update table Card UI

    const tableCard=document.getElementById(tableId);

    tableCard.querySelector("p").textContent=`Total: ${table.total.toFixed(2)}`;
    tableCard.querySelector("p:nth-of-type(2)").innerText=`Items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}`;
}

