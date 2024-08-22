function findDuplicates(nums) {
    const cache = {};
    for (const num of nums) {
        cache[num] = (cache[num] > 0 || 0) + 1;
    }

    const duplicates = [];
    for (const num in cache) {
        if (cache[num] > 1) duplicates.push(num);
    }

    return duplicates;
}

const findDuplicates2 = function(arr){
    return arr.filter((obj, i) => arr.indexOf(obj) !== i);
}

const result = findDuplicates([1, 2, 3, 1]);
console.log(result); // true