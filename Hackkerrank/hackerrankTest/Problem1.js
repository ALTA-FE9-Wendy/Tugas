console.log(getMinDeletions("abab"))

function getMinDeletions(s) {

    s = s.split(""); //bikin jadi array

    let arrSet = new Set(s); // bikin set (remove semua duplikat)
    var newArr = Array.from(arrSet) //jadikan arrya lagi

    let deletions = s.length - newArr.length //panjang original - panjang tanpa duplikat
    return deletions
}