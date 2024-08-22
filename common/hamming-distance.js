function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        throw Error("Not valid")
    }

    let distance = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) distance++
    }

    return distance
}

//bits
function hammingDistanceInt(num1, num2) {
    num1 = num1.toString(2);
    num2 = num2.toString(2);
   

    if (num1.length < num2.length) {
        while (num1.length !== num2.length) num1 = "0" + num1;
    } else {
        while (num1.length !== num2.length) num2 = "0" + num2;
    }

    let distance = 0;
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) distance++
    }

    return distance
}

const result = hammingDistanceInt(2, 9);
console.log(result); // true