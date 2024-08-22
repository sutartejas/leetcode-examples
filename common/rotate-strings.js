
function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal);
};

const result = rotateString('abcde','cdeab');

console.log(result)