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

    return result; 
}

console.log(roman(1930)) // harusnya MCMXXX, tpi untuk sementara hasilnya objek :  { M: 1, CM: 1, X: 3 }