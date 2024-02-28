// function myFunction() {
//     console.log("I");
//     console.log("R");
//     console.log("O");
//     console.log("N");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }
// myFunction()

function myFunction(num1, num2){
    return (num1 + num2);
}
let result = myFunction(1, 2);
// console.log(result);

function myFunction2(username = "Spider-Man"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return (`${username} has just logged in`);
}
let result2 = myFunction2()
console.log(result2);