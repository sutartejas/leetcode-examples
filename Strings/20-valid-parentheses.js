function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (const char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}
