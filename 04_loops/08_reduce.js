let myNum = [1, 2, 3, 4];

let sum = myNum.reduce((acc, currVal) => {
    return acc + currVal;
}, 0);

console.log(sum);