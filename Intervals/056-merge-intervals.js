function mergeIntervals(intervals) {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]) //Arr have smaller element come first;

    for (let i = 1; i < intervals.length; i += 1) {
        let curr = intervals[i];
        let prev = intervals[i - 1];
        if (curr[0] <= prev[1]) {
            intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]
            intervals.splice(i - 1, 1);
            i -= 1  // After merge, the arr become shorter
        }
    }
    return intervals
};


const result = mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])

console.log(result)