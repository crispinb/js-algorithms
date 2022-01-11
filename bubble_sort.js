// TODO: compare to other implementations
// TODO: any worthy enhancements?

function bs(arr) {
    arr = [...arr]
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                const lower = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = lower;
                sorted = false;
            }
        }
    }
    return arr;
}

function bs_limit(arr) {
    arr = [...arr]
    let unsorted_to = arr.length - 1;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted_to; i++) {
            if (arr[i + 1] < arr[i]) {
                const lower = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = lower;
                sorted = false;
            }
        }
        unsorted_to--;
    }
    return arr;
}

function bs_limit_destructured(arr) {
    arr = [...arr]
    let unsorted_to = arr.length - 1;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted_to; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false;
            }
        }
        unsorted_to--;
    }
    return arr;
}

export { bs, bs_limit, bs_limit_destructured }
