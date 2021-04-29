var sm57Cost =0;
var sm58Cost = 0;
var guitarCost = 0;
var r16Cost = 0;
var subtotal = 0;
///Loads data from items.js into table
function loadTableData(items) {
    const table = document.getElementById("ShoppingCart");
    
    //var for maximum available of an item
    var maximum= items.available;

      //inserts html into new cell and row of table with the proper invormation
      let row = table.insertRow();
      let image = row.insertCell(0);
      image.innerHTML= "<img src=" +items.image+ ">";
      let manufacturer = row.insertCell(1);
      manufacturer.innerHTML = "<h3>" + items.manufacturer + "</h3>";
      let name = row.insertCell(2);
      name.innerHTML = "<h3>" + items.productName+ "</h3>";
      let price = row.insertCell(3);
      price.innerHTML="<h3>$" +  items.price.toFixed(2)+ "</h3>";
      let description =row.insertCell(4);
      description.innerHTML="<h3>" + items.description+ "</h3>";
      let availability= row.insertCell(5);
      availability.innerHTML="<h3>" +  items.available+ "</h3>";
      let amount =row.insertCell(6);
      amount.innerHTML="<input type=number id=" + items.productName+" name=quantity min=0 max="+maximum+">";
      let deleteButton = row.insertCell(7);
      deleteButton.innerHTML = "<input id =" + items.deleteID+" type=button value =Delete>";
}

//creates the first row and cells that tells the user what type of informationis in each column
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
     let remove = row.insertCell(7);
     remove.innerHTML = "<h1>Remove Item</h1>";
}


LoadTableFirstTime();
//Loads data for each item
loadTableData(item1);
loadTableData(item2);
loadTableData(item3);
loadTableData(item4);

//function for click event for each item that updates the cost and subtotal
document.getElementById("Sm57").onclick= function()
{
  var price = item1.price;

  var howMany =parseInt(document.getElementById("Sm57").value);

  var priceToAdd = price * howMany;

  sm57Cost = priceToAdd;

  updateSubtotal();

}

//function for click event for each item that updates the cost and subtotal
document.getElementById("SG").onclick= function()
{
  var price = item2.price;

  var howMany =parseInt(document.getElementById("SG").value);
 
  var priceToAdd = price * howMany;
    
  guitarCost = priceToAdd;

  updateSubtotal();

}

//function for click event for each item that updates the cost and subtotal
document.getElementById("SM58").onclick= function()
{
  var price = item3.price;

  var howMany =parseInt(document.getElementById("SM58").value);

  var priceToAdd = price * howMany;
    
  sm58Cost = priceToAdd;

  updateSubtotal();
}


//function for click event for each item that updates the cost and subtotal
document.getElementById("R16").onclick= function()
{
  var price = item4.price;

  var howMany =parseInt(document.getElementById("R16").value);

  var priceToAdd = price * howMany;
    
  r16Cost = priceToAdd;

  updateSubtotal();;

}

//updates both subtotal and the subtotal data and the subtotal label
function updateSubtotal(){

subtotal= sm57Cost + sm58Cost + guitarCost + r16Cost;

var roundedSub =subtotal.toFixed(2);

label = document.getElementById("cost");

label.innerHTML="<h1>Subtotal: $" + roundedSub + "</h1>";
}

//deletes the entire row of an item 
document.getElementById("1").onclick= function(){
 this.parentElement.parentElement.remove();
}

//deletes the entire row of an item
document.getElementById("2").onclick= function(){
  this.parentElement.parentElement.remove();
}

//deletes the entire row of an item
document.getElementById("3").onclick= function(){
  this.parentElement.parentElement.remove();
}

//deletes the entire row of an item
document.getElementById("4").onclick= function(){
  this.parentElement.parentElement.remove();
}
