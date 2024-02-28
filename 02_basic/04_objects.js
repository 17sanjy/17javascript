const zehrUser = new Object();

zehrUser.id = "123abc"
zehrUser.name = "heyword";
zehrUser.email = "zehr@zehr.com"
// console.log(zehrUser);

const zehrTwo = {
    email: "zehrTwo",
    fullName: {
        firstName: "Zehr",
        lastName : "Two"
    }
}
// console.log(zehrTwo.fullName.lastName);

//merging two objects

const obj1 = { name: "Tom", title: "Holland"};
const obj2 = { firstName: "Chris", lastName: "Evan"};

// keys of both objects should be unique otherwise it overlap and return the latest key value
// const obj3 = Object.assign({}, obj1, obj2);

// or

const obj3 = { ...obj1, ...obj2};

// console.log(obj3);

// console.log(Object.keys(zehrUser)); // return only keys of the object
// console.log(Object.values(zehrUser)); //return only values

// console.log(zehrUser.hasOwnProperty('email')); // to check if key exist or not


// de-structuring of objects

const school = {
    name: "GGPS",
    course: "PCM",
    fee: 1000
}

 const {name, course, fee} = school;
console.log(fee); // donot need to use dot operator everytime

// json javascript object notation, the api response comes in json format only
// we need to put quotation on both ket and value pairs

// {
//     "name": "Mogo",
//     "isLogggedIn": true
// }