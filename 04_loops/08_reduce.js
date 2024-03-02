let myNum = [1, 2, 3, 4];

let sum = myNum.reduce((acc, currVal) => {
    // console.log(`accumulator: ${acc} and current Value: ${currVal}`);
    return acc + currVal;
}, 0);

// console.log(sum);

let courses = [
    { courseName: "HTML", price: 499},
    { courseName: "CSS", price: 499},
    { courseName: "JavaScript", price: 1499},
    { courseName: "React", price: 4999},
];

let TotalPrice = courses.reduce((acc, course) => acc + course.price, 0);
console.log(TotalPrice);