// function findMaxSumSubArray(k, arr) {

//     let maxSum = 0
//     let temp = 0
//     let counter = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (counter >= k) {
//             arr[i] = 0  //biar i kedepannya ga dijumlah
//         }

//         if (temp + arr[i] > arr[i]) {
//             counter++; //biar tau udah berapa banyak posisi array 

//             temp += arr[i]

//         } else {
//             temp = arr[i]
//         }

//         if (maxSum > temp) {
//             maxSum = maxSum
//         } else {
//             maxSum = temp
//         }

//     }

//     return maxSum
// }

function findMaxSumSubArray(k, arr) {
    var length = arr.length
    let temp = 0
    var temp2 = [0]
    let sum = 0

    for (let i = 0; i <= length - k; i++) {
        for (let j = i; j < i + k; j++) {
            sum += arr[j]
            // console.log("arrj", arr[j])
            // console.log("sum", sum)
            // console.log("temp2", temp2)

            // if (temp > sum) {
            //     sum = temp
            // }

        }
        if (sum > temp2[0]) {
            temp2.push(sum)
            temp2.shift()
        }

        // console.log("temp2", temp2)
        sum = 0
    }
    return Math.max(...temp2)
}
console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9 / 2 1 5 /  1 5 1 / 5 1 3 / 1 3 2
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8