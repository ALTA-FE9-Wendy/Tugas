var coins = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

var test = 1254

function roman(amount) {
    let result = {};
    let moneyLeftover = amount;

    for (const key in coins) { //pake coinchange
        while (moneyLeftover >= coins[key]) {
            if (result[key]) {
                result[key]++;
            } else {
                result[key] = 1;
            }
            moneyLeftover = (moneyLeftover - coins[key]).toFixed(2);
        }
    }
    return result;
}

function roman2(amount) {
    const coins = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = [];
    let romantotal = ""
    let moneyLeftover = amount;

    for (const coin of coins) {
        while (moneyLeftover >= coin) {
            result.push(coin);
            moneyLeftover = (moneyLeftover - coin).toFixed(2);
            if (coin == 1000) {
                romantotal += "M"
            } else if (coin == 900) {
                romantotal += "CM"
            } else if (coin == 500) {
                romantotal += "D"
            } else if (coin == 400) {
                romantotal += "CD"
            } else if (coin == 100) {
                romantotal += "C"
            } else if (coin == 90) {
                romantotal += "XC"
            } else if (coin == 50) {
                romantotal += "L"
            } else if (coin == 40) {
                romantotal += "XL"
            } else if (coin == 10) {
                romantotal += "X"
            } else if (coin == 9) {
                romantotal += "IX"
            } else if (coin == 5) {
                romantotal += "V"
            } else if (coin == 4) {
                romantotal += "IV"
            } else if (coin == 1) {
                romantotal += "I"
            }
        }
    }
    // return `${result}`;
    return romantotal
}

console.log(roman(test)) // harusnya MCMXXX, tpi untuk sementara hasilnya objek :  { M: 1, CM: 1, X: 3 }
console.log(roman2(test))

    // var romantotal = ""
    // Object.keys(result).forEach(key => {

    //     console.log("key", key)

    //     if (key = 1000) {
    //         romantotal += "M"
    //     } else if (key = 900) {
    //         romantotal += "CM"
    //     } else if (key = 500) {
    //         romantotal += "D"
    //     } else if (key = 400) {
    //         romantotal += "CD"
    //     } else if (key = 100) {
    //         romantotal += "C"
    //     } else if (key = 90) {
    //         romantotal += "XC"
    //     } else if (key = 50) {
    //         romantotal += "L"
    //     } else if (key = 40) {
    //         romantotal += "XL"
    //     } else if (key = 10) {
    //         romantotal += "X"
    //     } else if (key = 9) {
    //         romantotal += "IX"
    //     } else if (key = 5) {
    //         romantotal += "V"
    //     } else if (key = 4) {
    //         romantotal += "IV"
    //     } else if (key = 1) {
    //         romantotal += "I"
    //     }
    //     console.log("romantotal", romantotal)
    // });
