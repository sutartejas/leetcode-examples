
function maxProfit(nums) {
    let minStock = nums[0];
    let globalProfit = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minStock) minStock = nums[i];
        let profit = nums[i] - minStock;
        globalProfit = Math.max(profit, globalProfit)
    }

    return globalProfit
};

const result = maxProfit([7,1,5,3,6,4]);
console.log(result)
