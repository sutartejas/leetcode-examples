function check(s) {
    let i = 0, j = s.length - 1;
    while (i <= j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

function firstPalindrome(words) {
    for (let word of words) {
        if (check(word)) {
            return word;
        }
    }
    return "";
}


const result = firstPalindrome(["abc","car","ada","racecar","cool"]);

console.log(result)

