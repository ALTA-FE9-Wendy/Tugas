let mem = []; // untuk menyimpan hasil perhitungan

const fibTopDown = (n) => {
    if (mem[n]) return mem[n];

    if (n <= 1) {
        mem[n] = n;
    } else {
        mem[n] = fibTopDown(n - 1) + fibTopDown(n - 2);
    }
    return mem[n];
};

console.log(fibTopDown(0))  // 0
console.log(fibTopDown(1))  // 1
console.log(fibTopDown(2))  // 1
console.log(fibTopDown(3))  // 2
console.log(fibTopDown(5))  // 5
console.log(fibTopDown(6))  // 8
console.log(fibTopDown(7))  // 13
console.log(fibTopDown(9))  // 13
console.log(fibTopDown(10)) // 55