function func(arr,x) {
    for (i=0;i<arr.length;i++) {
        if (arr[i] == x ) {
            return i
        }
    }
    return -1
}