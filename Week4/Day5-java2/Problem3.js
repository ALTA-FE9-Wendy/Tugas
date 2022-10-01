function pyramid(n) {
    // atap -> median -> print n-1 // i /bintang sebelah kiri
    // kedua -> print n-2 // i jadi 2 //
    // ketiga -> print n-3  // i jadi 3 //
    // pyramid N -> sisi terlebar = N * 2 -1


    // 
    let temp = ""
    for (i = 1; i <= n - 1; i++) {
        for (j = 0; j <= n - i - 1; j++) {
            temp += "*"

        }
        temp += i.toString()
        for (k = 0; k < i - 1; k++) {
            temp += "*"
        }
        for (k = 0; k < i - 1; k++) {
            temp += "*"
        }

        temp += i.toString()

        for (k = 0; k < j; k++) {
            temp += "*"
        }
        temp += "\n"
    }
    temp += n.toString()
    for (k = 0; k < i - 1; k++) {
        temp += "*"
    }
    for (k = 0; k < i - 1; k++) {
        temp += "*"
    }
    temp += n.toString()
    temp += "\n"

    return temp
}
// 0 -> N-N
// 1 -> N
// 3
// 5
// 7 -> 
console.log(pyramid(5))

// A = 1
// B = 2
// C = 3
//  ...
// E = 5