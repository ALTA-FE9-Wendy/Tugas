// function targetSum(arr, target) {
//     var sliced = []
//     var length = arr.length
//     var result = []


//     for (let i = 0; i <= length; i++) {
//         for (let j = i; j <= length; j++) {
//             sliced = arr.slice(i, j)
//             let sum = 0
//             for (let k = 0; k < sliced.length; k++) {
//                 sum += sliced[k];
//             }
//             if (sum == target) {
//                 return { "i": i, "j": j }
//             }
//         }
//     }
// }


// SALAH NGERTI SOAL 

function targetSum2(arr, target) {
    var length = arr.length

    for (let i = 0; i <= length; i++) {
        for (let j = i; j <= length; j++) {
            if (arr[i]+arr[j] == target) {
                return { "i": i, "j": j }
            }
        }
    }
}

console.log(targetSum2([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(targetSum2([2, 5, 9, 11], 11))  // [0, 2]
console.log(targetSum2([1, 3, 5, 7], 12))   // [2, 3]
console.log(targetSum2([1, 4, 6, 8], 10))   // [1, 2]
console.log(targetSum2([1, 5, 6, 7], 6))    // [0, 1]