function primaSegiEmpat(wide, high, start) {
    let i = start + 1;
    let total = wide * high;
    let k = [];
    while (k.length < total) {
        let a = 2;
        let stop = false;
        while (a < i && stop == false) {
            if (i % a == 0 && i != a) {
                stop = true;
            }
            else {
                a++;
            }
        }
        if (a == i) {
            k.push(i);
        }
        i++;
    }
    let maxsum = 0;
    for (var j = 0; j < k.length; j++) {
        maxsum = maxsum + k[j];
    }
    let str = "";
    for (var l = 0; l < high; l++) {
        for (var m = 0; m < wide; m++) {
            const ind = l * wide + m;
            str = str + k[ind];

            if (m != wide - 1) {
                str = str + " ";
            } else {
                str = str + "\n"
            }
        }
    }
    return str + maxsum;
}

console.log(primaSegiEmpat(2, 3, 13)) 
// 17 19
//23 29 
//31 37
//156
console.log(primaSegiEmpat(5, 2, 1)) 
 // 2 3 5 7 11 
// 13 17 19 23 29
// 129