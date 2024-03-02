let myStates = ["Meghalaya", "Nagalalnd", "Manipur"];

let states = myStates.forEach((state) => {
    // console.log(state);
    return state; // foreach always return undefined.
});

// console.log(states);

// using filter
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = myNum.filter((num) => {
    return num > 4;
})

// console.log(newNum);

// using foreach 
let myNum1 = [];
myNum.forEach((num) => {
    if (num > 4) {
        myNum1.push(num);
    }
})
// console.log(myNum1);

let books = [
    {title: "Marvel", genre: "Fiction", publish: "1980", edition: "2008"},
    {title: "DC", genre: "Non-Fiction", publish: "1984", edition: "2001"},
    {title: "Sony", genre: "History", publish: "1990", edition: "2007"},
    {title: "Shaktiman", genre: "Non-Fiction", publish: "2001", edition: "2009"},
    {title: "Junior-G", genre: "Science", publish: "1980", edition: "2008"},
    {title: "Hobo", genre: "Fiction", publish: "1994", edition: "2003"},
    {title: "Hatim", genre: "History", publish: "2010", edition: "2018"},
    {title: "Aryaman", genre: "Science", publish: "2011", edition: "2020"}
];

let userBooks = books.filter((book) => book.genre === "Fiction" && book.edition > "2002");

console.log(userBooks);