function func(arr, x) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i
        }
    }
    return -1
}

console.log(func([1, 1, 3, 5, 5, 6, 7], 3)) // 2
console.log(func([1, 2, 3, 5, 6, 8, 10], 5)) // 3
console.log(func([12, 15, 15, 19, 24, 31, 53, 59, 60], 53))// 6
console.log(func([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)) // -1