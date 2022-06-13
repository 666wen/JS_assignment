

const arr1=["James", "Brennie"];

const arr2=[...arr1]; //can only deep copy 1st layer of array. nested array: let arrayCopy = JSON.parse(JSON.stringify(nestedArray));
arr2.push("Robert");
console.log(arr2);

let l=arr2.length;
let mid=Math.floor(l/2);
//console.log(mid);
const arr3=[...arr2];
//console.log(arr3[mid]);
arr3[mid]="Calvin";

const arr4=[...arr3];
let first=arr4.shift();

const arr5=[...arr4];
arr5.unshift("Rose", "Regal");

document.getElementById("demo5").innerHTML= 
"The result is: "+"<br>" +arr1 +"<br>" + arr2 +"<br>" +arr3+ "<br>" +arr4+"<br>" +arr5;
