function maxSequence(arr) {
    let i = 0; 
    let max = 0;
    while (i < arr.length) { 
        let j = 0;
         while (j < i) {
            let temp = 0;
            let k = j;
            while (k < i) {
                temp = temp + arr[k];
               k++
            }
            if (temp > max) {
                max = temp;
            }
            j++
        }
        i++
    }
    return max;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])) //7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])) //7
console.log(maxSequence([-2 - 5, 6, -2, -3, 1, 6, -6])) //8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])) //12