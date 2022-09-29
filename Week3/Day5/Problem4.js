function caesarCipher(offset, input) {

    let output = ""

    for (stringparameter of input) {
        output += offsetLetter(stringparameter, offset)
    }
    
    function offsetLetter(stringparameter, offset) {
        let changedLetter = "";
        let charcode = stringparameter.charCodeAt(0);
        let changedcode = charcode + (offset % 26);

        if (changedcode < 97) {
            changedcode += 26
        } else if (changedcode > 122) {
            changedcode -= 26
        }

        changedLetter = String.fromCharCode(changedcode);

        return changedLetter

    }
    return output
}

console.log(caesarCipher(3, "abc")) // def
console.log(caesarCipher(2, "alta")) // cnvc
console.log(caesarCipher(10, "alterraacademy")) // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"))
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"))
  // mnopqrstuvwxyzabcdefghijkl
