function dnaComplement(s) {
    // Write your code here
    s = s.split("").reverse()

    // s.forEach(change);

    // function change(x, i) {
    //     if (x == "A") {
    //         s[i] = "T"
    //     } else if (x == "T") {
    //         s[i] = "A"
    //     } else if (x == "G") {
    //         s[i] = "C"
    //     } else if (x == "C") {
    //         s[i] = "G"
    //     }
    // }
    for (i = 0; i <= s.length; i++) {
        if (s[i] == "A") {
            s[i] = "T"
        } else if (s[i] == "T") {
            s[i] = "A"
        } else if (s[i] == "G") {
            s[i] = "C"
        } else if (s[i] == "C") {
            s[i] = "G"
        }

    }
    return s.join()
}

console.log(dnaComplement("GTCAG")) //CTGAC