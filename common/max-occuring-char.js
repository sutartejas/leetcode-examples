function maxChar(str) {
    const obj = {}
    let max = 0;
    let maxChar = '';

    // create character map
    for (let char of str) {
        obj[char] = (obj[char] > 0 || 0) + 1
    }

    // find the most commonly used character
    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

const result = maxChar('Hellllllllo')
console.log(result)