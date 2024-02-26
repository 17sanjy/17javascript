let marvel = ["Thor", "Iron-Man", "Spider-Man"];
let dc = ["Super-Man", "Bat-Man", "Aqua-Man"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][2]);

let all = marvel.concat(dc);  // merged both
// console.log(all);

 let spreadOp = [...marvel, ...dc]; // merged both with spread op
//  console.log(spreadOp);


let arr = [1, 2, 3, [2, 4, [8, 9]], 7, [8, 7, 9, [1, 0]]]
let len = arr.length;
// console.log(len); // 6

let flatMethod = arr.flat(Infinity);
// console.log(flatMethod);

// console.log(Array.isArray("Bhola")); // false
// console.log(Array.from("Bhola")); // [ 'B', 'h', 'o', 'l', 'a' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]: converts into array