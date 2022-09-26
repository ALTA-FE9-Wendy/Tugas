function Problem_2_1(Nilai) {
  
    if (Nilai > 0 && Nilai <= 34) {
      return "D"
    } else if (Nilai > 34 && Nilai <= 49) {
      return "C"
    } else if (Nilai > 49 && Nilai <= 64) {
      return "B"
    } else if (Nilai > 64 && Nilai <= 79) {
      return "B+"
    } else if (Nilai > 79 && Nilai <= 100) {
      return "A"
    } else {
      return "invalid"
    }
  }

  console.log(Problem_2_1(200))
  
  module.exports = Problem_2_1;