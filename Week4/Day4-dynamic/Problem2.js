let count = 0;
let mem = [];

const fibBottomUp = (n) => {
  for (let i = 0; i <= n; i++) {
    count++;
    if (i <= 1) {
      mem[i] = i;
    } else {
      mem[i] = mem[i - 1] + mem[i - 2];
    }
  }
  return mem[n];
};

console.log(fibBottomUp(0))  // 0
console.log(fibBottomUp(1))  // 1
console.log(fibBottomUp(2))  // 1
console.log(fibBottomUp(3))  // 2
console.log(fibBottomUp(5))  // 5
console.log(fibBottomUp(6))  // 8
