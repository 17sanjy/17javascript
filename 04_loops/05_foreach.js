// for-each

const myStates = ["Meghalaya", "Nagaland", "Manipur"];

myStates.forEach((item) => {
    // console.log(item);
});

myStates.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

// array of objects using for-each

const myState = [
    {
        State: "Meghalaya",
        Capital: "Shillong"
    },
    {
        State: "Nagaland",
        Capital: "Kohima"
    },
    {
        State: "Manipur",
        Capital: "Imphal"
    },
];

myState.forEach((state) => {
    console.log(state.Capital);
})

// Note: for-each does not return anything but undefined. To overcome this we have various
//... ways to loop over an array or array of objects like filter, map, reduce.