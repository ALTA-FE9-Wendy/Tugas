function ashtonString(s, k) {
    // Write your code here
    s = s.split("");
    var length = s.length
    console.log(length);

    var arr = []
// push dari i sampai j yang sudah digabung jadi 1 string
    for (let i = 0; i <= length; i++) {
        for (let j = i; j <=length; j++) {
            arr.push(s.slice(i, j).join("")) //hapus duplikat disini
        }
    }
 //hapus semua duplikat
    let arrSet = new Set(arr);              
    var newArr = Array.from(arrSet) 
    
    newArr.sort() // ganti algo sort

// hapus kalo ada blank 
    if (newArr[0] == "") {
        newArr.shift() 
    } 
    
    console.log(newArr)

//concat semua value arrray
    var concat = newArr.join("") 

    console.log(concat)

    return concat[k-1]
}

console.log(ashtonString('dbac', 3))

