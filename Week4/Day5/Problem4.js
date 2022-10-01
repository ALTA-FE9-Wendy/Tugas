function findMaxSumSubArray(k, arr) {

    let maxSum = 0
    let temp = 0
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (counter >= k) {
            arr[i] = 0  //biar i kedepannya ga dijumlah
        }

        if (temp + arr[i] > arr[i]) {
            counter++; //biar tau udah berapa 

            temp += arr[i]

        } else {
            temp = arr[i]
        }

        if (maxSum > temp) {
            maxSum = maxSum
        } else {
            maxSum = temp
        }

    }

    return maxSum
}

// function findMaxSumSubArray(k, arr) {
//     var length = arr.length
//     var temp2 = []
//     let sum = 0

//     for (let i = 0; i < length; i++) {
//         for (let j = i; j < length; j++) {
//             sum = sum + arr[j]

//             console.log(sum)
//         }
//     }
// }
console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8