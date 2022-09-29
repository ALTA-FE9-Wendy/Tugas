function ubahHuruf(input) {
    input = input.toLowerCase();

    let output = ""

    for (stringparameter of input) {
        output += offsetLetter(stringparameter)
    }

    function offsetLetter(stringparameter) {

        let changedLetter = "";
        let charcode = stringparameter.charCodeAt(0);
        if (charcode == 32) {
            changedLetter = String.fromCharCode(charcode)
            return changedLetter
        } else {
            let changedcode = charcode + (10 % 26);

            if (changedcode < 97) {
                changedcode += 26
            } else if (changedcode > 122) {
                changedcode -= 26
            }

            changedLetter = String.fromCharCode(changedcode);

            return changedLetter

        }

    }
    return output.toUpperCase()
}

console.log(ubahHuruf("SEPULSA OKE"))     // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")) // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA"))       // SXNYXOCSK
console.log(ubahHuruf("GOLANG"))          // QYVKXQ
console.log(ubahHuruf("PROGRAMMER"))      // ZBYQBKWWOB