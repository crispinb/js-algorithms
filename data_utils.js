function generate_random_array(n) {
    const shuffled = [];
    for (let i = 0; i < n; i++) {
        shuffled.push(i);
    }
    const sorted = [...shuffled];
    shuffled.sort(() => 0.5 - Math.random())
    return { shuffled: shuffled, sorted: sorted }
}

export { generate_random_array }