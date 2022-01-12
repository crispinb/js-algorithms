function selsort(arr) {
    arr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        let imin = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[imin]) {
                imin = j;
            }
        }
        if (imin !== i) {
            const oldmin = arr[i];
            arr[i] = arr[imin];
            arr[imin] = oldmin;
        }
    }
    return arr
}

function selsort_destructure_swap(arr) {
    arr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        let imin = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[imin]) {
                imin = j;
            }
        }
        if (imin !== i) {
            [arr[i], arr[imin]] = [arr[imin], arr[i]]
        }
    }
    return arr
}

export { selsort, selsort_destructure_swap }