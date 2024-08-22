function SecondMax(nums) {
    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < nums.length; i++) { //1
        if (nums[i] === first || nums[i] === second) continue;
        if (nums[i] > first) {
            [first, second] = [nums[i], first];
        } else if (nums[i] > second) {
            [second] = [nums[i]];
        }
    }
    
    return second === -Infinity ? first : second;
};

function SecondLargest(nums) {
    let secondLargest = -Infinity;
    let largest = -Infinity;
    
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] > largest){
            secondLargest = largest;
            largest = nums[i]
        }
        if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i]
        } 
    }
    
    return secondLargest
};


const result = SecondLargest([1, 27, 34, 5, 6, 71]);

console.log(result)