function distributeCandies(candies, num_people) {
    const output = new Array(num_people).fill(0);
    let cursor = 0;
    let count = 1;
    
    while (candies > 0) {
        output[cursor] += (count <= candies ? count : candies);
        candies -= count;
        count++;
        cursor++;
        if (cursor === num_people) {
            cursor = 0;
        }
    }
    
    return output;
};

const result = distributeCandies(candies = 7, num_people = 4);
console.log(result)