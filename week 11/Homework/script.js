
document.getElementById("AddButton").onclick = function()
{
    var node = document.createElement("Li");
   node.setAttribute("id","li")
    var text = document.getElementById("input").value; 
    var textnode=document.createTextNode(text);

    //checks for input data before appending
    if(text !="")
    {
        node.appendChild(textnode);
    document.getElementById("TDList").appendChild(node);
    }
    //Alerts user to input data before pressing buton
    else
    {
        window.alert("Please put an item in the text box before clicking the button.");   
    }

    DeleteInput();
}
 
//deletes value in input text box
function DeleteInput()
{
    document.getElementById("input").value="";
    document.getElementById("input").focus();
}

//Clears all data in UL
document.getElementById("ClearButton").onclick = function()
{
    var ul = document.getElementById("TDList");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}

//checks for what type of element is clicked and changes textDecoration if it is a list item
document.addEventListener ('click', function(event)
{
   if (event.target.id==="li"){
        event.target.id = 'checked';
        var CrossThrough = document.getElementById('checked');
        CrossThrough.style.textDecoration= 'line-through'
   event.target.id = 'li';
    }
},false)
