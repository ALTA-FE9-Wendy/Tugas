function makingAnagrams(s1, s2) {
    s1 = s1.split("").sort()
    s2 = s2.split("").sort()

    console.log(s1)
    console.log(s2)

    var b = 0
    var i = 0
    counter = 0

    while (b <= s1.length) {
        while (i <= s2.length) {
            if (s1[b] == s2[i]) {
                b++;
            }
            if (s1[b] != s2[i]) {
                s2.shift(i);

                console.log(counter)
            }


        }
        b++
    }
    return (counter)
}
console.log(makingAnagrams('cde', "abc"))