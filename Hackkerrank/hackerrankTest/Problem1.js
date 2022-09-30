function getMinDeletions(s) {

    s = s.split(""); 

    let arrSet = new Set(s); 
    var newArr = Array.from(arrSet) 

    let deletions = s.length - newArr.length 
    return deletions
}

console.log(getMinDeletions("aabccdd"))
