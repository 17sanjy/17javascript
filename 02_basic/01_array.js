// +++++++++++++++++++++++++++++Array++++++++++++++++++++++++++++++++
// every copy mad in an array creates a reference (shallow) copy means changes made in 
// both the array bcoz it reference the same array. Other copy is deep copy that are 
// independent to each other like in stack memory in primitive datatype. 


let myArray = ["trader", true, {name:"seller"}, 9, 0, 7];

let otherArray = new Array(1, 2, 7, true, "seller")

console.log(myArray);
console.log(otherArray);