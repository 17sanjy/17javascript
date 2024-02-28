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
// console.log(result2);

// ++++++++++++++++++++++++++++functions in depth++++++++++++++++++++++++++

const user = {
    username: "Loki",
    power: "Mystic"
}

function myNewFunction(data){
    return `User is ${data.username} and He has ${data.power} power`;
}
console.log(myNewFunction(user));

function manyValue(value1, value2, ...value){
    return value;
}
console.log(manyValue(3, 4, 8, 9, 10));

const newArray = [1, 2, 3, 4, 8, 9];

function newArrayFunction(...arr){
    return arr
}
console.log(newArray[1]);