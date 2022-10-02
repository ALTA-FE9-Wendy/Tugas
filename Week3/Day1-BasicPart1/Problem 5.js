function Problem_5() {

    let tinggi = 8
    let radius = 5
  
    let luas_lingkaran = 2 * Math.PI * Math.pow(radius, 2) 
    let luas_samping = 2 * Math.PI * radius * tinggi
  
    let luas_total = luas_lingkaran + luas_samping
  
    Math.round(luas_total)
  
    console.log(luas_total + " cm")
  }

  Problem_5()