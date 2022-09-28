function Problem_5_1() {
    let input1 = "AKAS"
    let input2 = "AKASHI"
    let output = ""
  
  
    for (i = 0; i < input2.length; i++) {
      if (input1.charAt(i) == input2.charAt(i)) {
        output = output + input1.charAt(i)
  
      }
    }
    console.log(output)
  }