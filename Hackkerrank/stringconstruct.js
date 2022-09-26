function stringConstruction(s) {
    // Write your code here
    let count=0;
    let arr = s.split("")
    let arrSet = new Set(arr);
    var Sarr = Array.from(arrSet)
    console.log(arrSet)

    return Sarr.length
}

console.log(stringConstruction('abcabc'))