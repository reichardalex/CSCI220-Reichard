var ToDoItem = document.getElementById("input").textContent;
var Button = document.getElementById("Button");



function AddItem(){
var newLI = document.createElement('li');
var newItem = document.createTextNode(ToDoItem);
var positionLI = document.getElementsByTagName('ul')[0];
// Insert the new element into its position.
newLI.appendChild(newItem);
positionLI.appendChild(newItem);
}