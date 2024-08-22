function eraseOverlapIntervals(intervals) {
    // sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            // overlapping intervals found, increment removal count
            remove++;
        } else {
            // update previous interval
            prev = intervals[i];
        }
    }
    return remove;
}

const result = eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]);
console.log(result);
