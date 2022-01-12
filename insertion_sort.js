function insertion_sort(arr) {
    arr = [...arr]
    for (let i = 1; i < arr.length; i++) {
        let pos = i - 1;
        let testvalue = arr[i];
        while (pos >= 0) {
            if (arr[pos] > testvalue) {
                arr[pos + 1] = arr[pos];
                pos--;
            } else {
                break;
            }
        }
        arr[pos + 1] = testvalue;
    }

    return arr;
}

export {
    insertion_sort
}


