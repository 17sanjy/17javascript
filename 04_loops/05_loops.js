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