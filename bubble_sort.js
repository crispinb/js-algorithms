// TODO: compare to other implementations
// TODO: any worthy enhancements?

// Comments
// Node destructuring is much slower than using a temp variable
// eg with 100 el array:
// bs:
// 40 667 ops/s, ±2.14%   | 28.54% slower

// limit:
// 56 912 ops/s, ±2.15%   | fastest

// limit & destructure:
// 28 074 ops/s, ±3.76%   | slowest, 50.67% slower

function bs(arr) {
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
