function joinArrayRemoveDuplicate(arrayA, arrayB) {
    var array = arrayA.concat(arrayB);
    console.log(array)
    let arrSet = new Set(array);
    console.log(arrSet)
    return arrSet
}  
module.exports = joinArrayRemoveDuplicate;