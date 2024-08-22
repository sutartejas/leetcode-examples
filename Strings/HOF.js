

function double(a) {
    return a * 2
}

const numbers = [1, 2, 3, 4, 5];

function higherOrderFunction(operation, arr){
    return arr.map(operation)
}


const perform = higherOrderFunction(double, numbers);
console.log(perform);