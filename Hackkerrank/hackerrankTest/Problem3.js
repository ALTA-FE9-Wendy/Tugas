function maximumSum(arr) {

    let maxSum = temp
    let temp = 0

    for (let i = 0; i < arr.length; i++) {

        if (temp + arr[i] > arr[i]) {
            temp = temp + arr[i]
        } else {
            temp = arr[i]
        }
        console.log("temp", temp)

        if (maxSum > temp) {
            maxSum = maxSum
        } else {
            maxSum = temp
        }
        console.log("maxsum", maxSum)
    }
    return maxSum
}
console.log(maximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


