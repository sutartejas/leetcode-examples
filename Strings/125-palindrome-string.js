function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isPalindrome2(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('')
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

const result = isPalindrome2(str1)
 
console.log(result);