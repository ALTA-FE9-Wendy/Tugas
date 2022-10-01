function Problem_5_1(input1,input2) {

    let output = ""
  
  
    for (i = 0; i < input2.length; i++) {
      if (input1.charAt(i) == input2.charAt(i)) {
        output = output + input1.charAt(i)
  
      }
    }
    return output
  }

  module.exports = Problem_5_1;