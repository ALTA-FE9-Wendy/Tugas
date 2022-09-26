function findMedian(arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr)

    var median = 0
    var length = arr.length
    console.log(length)

    if (length % 2 == 0) {
        median = arr[length / 2]
    } else {
        median = arr[((length + 1) / 2)-1]
    }
    return median
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 5, 5, 5, 5, 5]))