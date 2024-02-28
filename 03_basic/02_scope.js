/* scope: let and const have block scope but var does not has block scope. to avoid 
conflicting regarding variable name in local or global scope we mostly use let and const
to define a variable. */

let a = 1000
var c = 400;
if (true) {
    let a = 100;
    const b = 200;
    c = 300;
    // console.log("INNER a:", a);
    // console.log("INNER b:", b);
    // console.log("INNER c:", c);
}
// console.log("OUTER a:", a);
// console.log("OUTER" b:, b);
// console.log("OUTER c:", c);


// cannot access data outside their scopes
function one(){
    let marvel = "Ironman";

    function two() {
        let dc = "Batman";
        console.log(marvel);
    }
    // console.log(dc);
    two();
}
one();
// console.log(marvel);
// console.log(dc);

// if block

if(true){
    let marvel = "Spiderman";
    if(true){
        let dc = "Aquaman";
        console.log(marvel);
    }
    // console.log(dc); // error
}
// console.log(marvel); error
// console.log(dc);

// ++++++++++++++++++++++++ Hoisting ++++++++++++++++++++++

console.log(unknown(4));
function unknown(num){
    return num;
}

console.log(unknownTwo(2));
const unknownTwo = function(num2){
    return num2;
}