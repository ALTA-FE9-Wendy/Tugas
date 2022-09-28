function Problem_2_3() {
    let input = 35
    for (let i = 2; i <= input; i++) {
      let faktor = input % i
      if (faktor == 0) {
        if (i < input) {
          console.log("not prime")
          break;
        } else {
          console.log("prime")
        }
      }
    }
  }
  