 function findTheDifference(s, t) {
    for (let letter of s)
        t = t.replace(letter, '');
    return t;
};

const result  = findTheDifference('abcd','abcde');

console.log(result)