function alternatingCharacters(s) {
    // Write your code here
    s = s.split("");
    counter = 0
    
    for (let i = 0; i<s.length; i++) {
        if (s[i]==s[i+1]) {
            s.splice(i+1,1);
            i = -1;
            counter++;

        }

    }

    return counter
}
console.log(alternatingCharacters("ABABBBA"))