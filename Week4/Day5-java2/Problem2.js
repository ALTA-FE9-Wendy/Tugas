function cetakTabel(num) {
    output = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            output += j * i
            output += " "
        }
        output += "\n"
    }

    return output
}

console.log(cetakTabel(10))