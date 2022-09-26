function pangrams(s) {
    // Write your code here
    //
    // var letter = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]
    s = s.toLowerCase() .split('').sort().join('')
    s = new Set(s)
    var arr = Array.from(s)
    var indexx= arr.indexOf('')
    arr.splice(index)
    console.log(s)
    console.log (arr.length)


    if (s.length < 26) {
        return 'not pangram'
    }   else  {
        return 'pangram'
    }
}

console.log(pangrams('the quick brown fox jumps over the lazy dog'))