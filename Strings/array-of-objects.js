const arrayOfObjects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' },
    { id: 2, name: 'Bob' }
];

const uniqueObjects = arrayOfObjects.filter((value, index, self) => {
    return self.findIndex(obj => obj.id === value.id) === index;
});

console.log(uniqueObjects);
// Output: 
// [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ]
