

var paragraph = document.getElementById("1");

console.log(paragraph.textContent);

//changing data

paragraph.textContent = "New Data";

document.getElementById("1").textContent = paragraph.textContent;

//create element


// Create a new element and store it in a variable Ordered List.
var newOL = document.createElement('ol');
var positionOL = document.getElementsByTagName('body')[0];
positionOL.appendChild(newOL);

var Button = document.getElementById('Button');

// Button.addEventListener('click',AddListItem);

function AddListItem()
{
// Create a new element and store it in a variable List. Item
var newLI = document.createElement('li');
var input = document.getElementById("input").textContent;
var newObject = document.createTextNode(input);
var positionLI = document.getElementsByTagName('ol')[0];
// Insert the new element into its position.
newLI.appendChild(newObject);
positionLI.appendChild(newLI);
}







