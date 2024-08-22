function removeOccurrences(str, part) {
    while (str.includes(part)) {
        str = str.replace(part, "");
    }
    return str;
}

const result = removeOccurrences('axxxxyyyyb', 'xy');
console.log(result); // Expected output: 'axxxbyb'