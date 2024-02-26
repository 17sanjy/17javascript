// +++++++++++++++++++++++++++++Array++++++++++++++++++++++++++++++++
// every copy mad in an array creates a reference (shallow) copy means changes made in 
// both the array bcoz it reference the same array. Other copy is deep copy that are 
// independent to each other like in stack memory in primitive datatype. 


let myArray = ["trader", true, {name:"seller"}, 9, 0, 7];

let otherArray = new Array(1, 2, 7, true, "seller")

// console.log(myArray);
// console.log(otherArray);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = [1, 2, 3 , 4, 5, 6, 7];

// arr.push(9)
// arr.push(19)
// arr.pop()

// arr.unshift(800);
// arr.unshift(22);
// arr.shift();
// arr.shift();
// console.log(arr);
// console.log(newArr.join()); // return string with values

// slice and splice
/* slice: it takes two parameters first is to point the index at where to start performing
second is at what index you want to go but not included.
slice creates new array and does not change the original array.

Splice: It return the new array but also manipulate the older array with leftover value that
is left when the new array created*/

let slice = arr.slice(-4, -2);
// console.log(slice);

let splice = arr.splice(2,3);
console.log(arr); //[ 1, 2, 6, 7, 8 ]
console.log(splice); // [ 3, 4, 5 ]
