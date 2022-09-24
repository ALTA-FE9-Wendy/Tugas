function Problem_2_1() {

    let Nilai = 40
  
    if (Nilai > 0 && Nilai <= 49) {
      console.log("D")
    } else if (Nilai > 34 && Nilai <= 49) {
      console.log("C")
    } else if (Nilai > 49 && Nilai <= 64) {
      console.log("B")
    } else if (Nilai > 64 && Nilai <= 79) {
      console.log("B+")
    } else if (Nilai > 79 && Nilai <= 100) {
      console.log("A")
    } else console.log("invalid")
  
  }