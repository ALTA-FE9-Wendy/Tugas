function camelcase (s){
    var output = s.replace(/[a-z]/g, "")
    return(output.length+1)
}
  
console.log(camelcase('oneTwoThreeFour'))