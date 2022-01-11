function selsort(arr) {
    arr = [...arr]
    // TODO: for .. of?
    for (let i = 0; i < arr.length; i++) {
        let imin = i;
        for(let j = i; j < arr.length; j++) {
            if (arr[j] < arr[imin]){
                imin = j;
            }
        }
        // TODO: destructure?
        if (imin !== i) {
            const oldmin = arr[i];
            arr[i] = arr[imin];
            arr[imin] = oldmin;
        }
    }
    return arr
}

export { selsort }