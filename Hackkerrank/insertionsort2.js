function insertionSort2(n, arr) {
    // Write your code here
    var i = 0
    while (i <= arr.length) {
        if (arr[i]<arr[i+1]) {
            i++;
            console.log(arr)
        } else {
            arr[i+1]=arr[i]

        }
    }
    return arr;
}

console.log(insertionSort2(6,[1, 4, 3, 5, 6, 2]))
