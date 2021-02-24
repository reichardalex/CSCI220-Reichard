

console.log(range(5,10));

function range (start, end){
counter = 0;

myArray = new Array();
for (num= start; num <= end; num++){
    
myArray[counter] = num;
counter++;
}
   

    return myArray;
}