function closedPaths(number) {
    // Write your code here
    // 0 4 6 9 = 1
    // 8 = 2
    var counter = 0
    number = number.toString()

    for (i = 0; i <= number.length; i++) {

        if (number.charAt(i) === "0" || number.charAt(i) === '4' || number.charAt(i) === '6' || number.charAt(i) === '9') {
            counter = counter + 1;
        }
        else if (number.charAt(i) === '8') {
            counter = counter + 2;
        } else {
            counter = counter + 0
        }
    }
    return (counter)

}

console.log(closedPaths(888))