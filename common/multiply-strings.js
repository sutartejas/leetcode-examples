//https://leetcode.com/problems/multiply-strings/solutions/671503/the-most-voted-java-solution-rewritten-in-javascript-with-graph-explanation/

function multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'

    const m = num1.length, n = num2.length, res = new Array(m + n).fill(0)

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j, p2 = i + j + 1
            let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
            //console.log(sum)
            res[p2] = sum % 10
            res[p1] += Math.floor(sum / 10)
        }
    }
    if (res[0] === 0) res.shift()
    return res.join('')

}

const result = multiply("123", "12");

//console.log(result);

