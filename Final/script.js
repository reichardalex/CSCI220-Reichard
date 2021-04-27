var sm57Cost =0;
var sm58Cost = 0;
var guitarCost = 0;
var r16Cost = 0;
var subtotal = 0;

function loadTableData(items) {
    const table = document.getElementById("ShoppingCart");
    
    var maximum= items.available;


      let row = table.insertRow();
      let image = row.insertCell(0);
      image.innerHTML= "<img src=" +items.image+ ">";
      let manufacturer = row.insertCell(1);
      manufacturer.innerHTML = "<h3>" + items.manufacturer + "</h3>";
      let name = row.insertCell(2);
      name.innerHTML = "<h3>" + items.productName+ "</h3>";
      let price = row.insertCell(3);
      price.innerHTML="<h3>" +  items.price+ "</h3>";
      let description =row.insertCell(4);
      description.innerHTML="<h3>" + items.description+ "</h3>";
      let availability= row.insertCell(5);
      availability.innerHTML="<h3>" +  items.available+ "</h3>";
      let amount =row.insertCell(6);
      amount.innerHTML="<input type=number id=" + items.productName+" name=quantity min=0 max="+maximum+">";
    
}

function LoadTableFirstTime()
{
    const table = document.getElementById("ShoppingCart");
    let row = table.insertRow();
    let image = row.insertCell(0);
    image.innerHTML= "<h1>Image</h1>";
    let manufacturer = row.insertCell(1);
    manufacturer .innerHTML= "<h1>Manufacturer</h1>";
    let productName = row.insertCell(2);
    productName.innerHTML = "<h1>Product Name</h1>";
    let price = row.insertCell(3);
    price.innerHTML = "<h1>Price</h1>";
    let description= row.insertCell(4);
    description.innerHTML= "<h1>Description</h1>"
    let availability = row.insertCell(5);
    availability.innerHTML="<h1>Availability</h1>";
    let Amount = row.insertCell(6);
     Amount.innerHTML= "<h1>Quantity</h1>";
}


LoadTableFirstTime();
loadTableData(item1);
loadTableData(item2);
loadTableData(item3);
loadTableData(item4);

document.getElementById("Sm57").onclick= function()
{

  var price = item1.price;

  var Subtotal;

  var howMany =parseInt(document.getElementById("Sm57").value);

  var priceToAdd = price * howMany;

    sm57Cost = priceToAdd;

updateSubtotal();

}

document.getElementById("SG").onclick= function()
{
    var price = item2.price;

  var howMany =parseInt(document.getElementById("SG").value);

 
  var priceToAdd = price * howMany;
    
  guitarCost = priceToAdd;


updateSubtotal();
}

document.getElementById("SM58").onclick= function()
{
    var price = item3.price;

  var howMany =parseInt(document.getElementById("SM58").value);

 
  var priceToAdd = price * howMany;
    
  sm58Cost = priceToAdd;


updateSubtotal();
}

document.getElementById("R16").onclick= function()
{
    var price = item4.price;

  var howMany =parseInt(document.getElementById("R16").value);

 
  var priceToAdd = price * howMany;
    
  r16Cost = priceToAdd;


updateSubtotal();;
}

function updateSubtotal(){


    subtotal= sm57Cost + sm58Cost + guitarCost + r16Cost;

label = document.getElementById("cost");

label.innerHTML="<h1>" + subtotal + "</h1>";
}