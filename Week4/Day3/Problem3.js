function dragonOfLoowater(dragon, knight) {
    dragon.sort((a, b) => a - b)
    knight.sort((a, b) => a - b)

    let total = 0

    for (i = 0; i < knight.length; i++) { 
        if (knight[i]< dragon[0]) {
            continue;
        }

        dragon.shift();
        total = total + knight[i];

        if (dragon.length == 0) {
            return total
        }
    }
    return "fail"
}

console.log(dragonOfLoowater([5,4],[7,8,4]))