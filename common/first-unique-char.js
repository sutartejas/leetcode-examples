function firstUniqChar(str) {
    let obj = {};

    for (let a of str) {
        obj[a] = (obj[a] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return i;
        }
    }

    return -1;
};

const result = firstUniqChar('greekforgreeks');
console.log(result)