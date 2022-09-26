function Problem_2_2_1() {
    let input = 20
    for (let i = 0; i <= input; i++) {
      let faktor = input % i
      if (faktor == 0) {
        console.log(i)
      }
    }
  }

  Problem_2_2_1()