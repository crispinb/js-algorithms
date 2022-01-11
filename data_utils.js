function generate_random_array(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    }
    return arr;
}

module.exports = { generate_random_array }