function meanmedian(arr) {
    //MEDIAN
    arr = arr.sort(function (a, b) {
        return a - b;
    });

    var median = 0
    var length = arr.length

    if (length % 2 == 0) {
        median = arr[length / 2]
    } else {
        median = arr[((length + 1) / 2) - 1]
    }
    //MEAN
    let sum = 0
    let i = 0

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    let mean = sum/arr.length
    return {mean, median}
}

console.log(meanmedian([15, 20, 30, 60, 120]))

module.exports = meanmedian;