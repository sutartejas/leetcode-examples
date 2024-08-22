
// Time complexity: O(n)
// Space complexity: O(n)

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCountMap = new Map();

    for (const char of str1) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (charCountMap.get(char)) {
            charCountMap.delete(char);
        }
    }

    return charCountMap.size === 0;
}

function isAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {}

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] > 0) || 0 + 1;
        obj2[str2[i]] = (obj2[str2[i]] > 0) || 0 + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}

const result = isAnagram2("ramu", "umara");
console.log(result); // true