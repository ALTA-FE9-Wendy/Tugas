function marsExploration(s) {
    // Write your code here
    counter = 0
    for (let i = 0; i < s.length; i = i + 3) {
        if (s[i] != 'S') {
            counter = counter + 1;
        }
        if (s[i + 1] != 'O') {
            counter = counter + 1;
        }
        if (s[i + 2] != 'S') {
            counter = counter + 1;
        }

    }
    return counter

}

console.log(marsExploration('SOSSPSSQSSOR'))