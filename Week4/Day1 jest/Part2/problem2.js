function Problem_2_2_1(input) {
	let arr = []
    for (let i = 0; i <= input; i++) {
      let faktor = input % i
      if (faktor == 0) {
        arr.push(i)
      }
    }
  }

module.exports = Problem_2_2_1;