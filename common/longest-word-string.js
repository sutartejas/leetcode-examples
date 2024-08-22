function longestWord(str) {

    // Split the string using regex
    str = str.split(" ")
    // Creating a empty string to store largest word
    let longestWord = "";

    // Creating a for...loop to iterate over the array
    for (let i = 0; i < str.length; i++) {

        // If the i'th item is greater than largest string
        // then overwrite the largest string with the i'th value
        if (str[i].length > longestWord.length) {
            longestWord = str[i];
        }
    }
    return longestWord;
}

const result = longestWord("Hello guys this is geeksforgeeks where");
console.log(result)