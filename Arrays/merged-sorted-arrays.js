function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    // Use two pointers to traverse both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to merged
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to merged
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0, 3, 4, 4, 6, 30, 31]
