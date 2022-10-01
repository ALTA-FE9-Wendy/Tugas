function func(a, b, c) {
    for (let x = 0; x <= a; x++) {
        for (let y = 0; y <= a; y++) {
            for (let z = 0; z <= a; z++) {
                let req = x + y + z === a && x * y * z === b && x ** 2 + y ** 2 + z ** 2 === c
                if (req)
                    return {
                        'x': x,
                        'y': y,
                        'z': z,
                    }
            }
        }
    }
    return "no solution"
}

console.log(func(1, 2, 3))  // no solution
console.log(func(6, 6, 14)) // 1 2 3