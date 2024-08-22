function permutations(nums) {
    const result = [];

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    const generatePermutations = (arr, start) => {
        if (start === arr.length) {
            result.push([...arr]); // Push a copy of the current permutation to the result
            return;
        }
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i); // Swap elements to create permutations
            generatePermutations(arr, start + 1); // Recursively generate permutations for the remaining elements
            swap(arr, start, i); // Restore the array to its original state (backtracking)
        }
    };

    generatePermutations(nums, 0); // Start generating permutations from index 0
    return result;
}

const result = permutations([1, 2, 3]);
console.log(result);
