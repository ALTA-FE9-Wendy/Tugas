function Super(s) {
    //s = [...s].sort().join("");
    s = s.split("")
    console.log(s)
    var i = 0
    while (i < s.length) {
        if (s[i] == s[i+1]) {
            console.log(s)
            s.splice(i,2);
            console.log(s)
            i = -1
        } 
        i++;
    }
    if (s == '') {
        return ('Empty String')
    } else {
        return (s.join(""))
    }

}

console.log(Super('11233442'))
//acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj
//acdqgacdqj

// function Super(s) {
//     //s = [...s].sort().join("");
//     var i = 0
//     while (i < s.length) {
//         if (s.charAt(i) === s.charAt(i + 1)) {
//             var temp = s.replace(s.charAt(i), '');
//             var temp2 = temp.replace(s.charAt(i + 1), '')
//             s = temp2;
//             i=-1; 
//         }
//         i++;
//     }
//     if (s == '') {
//         return ('Empty String')
//     } else {
//         return (s)
//     }

// }
