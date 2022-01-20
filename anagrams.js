function anagrams(s) {
    if (s.length <= 1) {
        return [s];
    } else {
        const first = s.at(0);
        const rest = s.slice(1);
        return allInsertions(first, anagrams(rest));
    }
}

function allInsertions(s, arr) {
    const result = [];
    for (const t of arr) { 
        for (let i = 0; i <= t.length; i++) {
            result.push(t.slice(0, i) + s + t.slice(i));
        }
    }
    return result;
  }

export default anagrams;