let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = myNum.map((num) => { return num * 10})
.map((newEle) => newEle + 1)
.filter((newValue) => newValue > 40);
// console.log(newNum);

// foreach

let someNewNum = [];

myNum.forEach((num) => {
    if(num > 4){
        someNewNum.push(num);
    }
})
// console.log(someNewNum);