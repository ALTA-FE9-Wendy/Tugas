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

console.log(fibTopDown(50)); 