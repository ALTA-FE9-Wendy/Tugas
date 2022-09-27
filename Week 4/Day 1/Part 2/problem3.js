function Problem_2_3(input) {
    for (let i = 2; i <= input; i++) {
      let faktor = input % i
      if (faktor == 0) {
        if (i < input) {
          return "false"
          break;
        } else {
          return "true"
        }
      }
    }
  }
  
  
module.exports = Problem_2_3;
  