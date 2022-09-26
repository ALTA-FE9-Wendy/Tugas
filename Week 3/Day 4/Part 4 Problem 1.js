function Problem_1r_1() {
    let input = 100
    let not_prime = []
    let all_num = []
    let isPrime = true
      
    // if num % i = 0, false
    // check is prime = false, true sampai num
    // if true = COUNTER ++ 
    // counter sampai num
       
        for (let j = 0; j <= input ; j++)
      for (let i = 2; i < j; i++) {
        if (j % i == 0) {
          not_prime.push(j);
          break;
              
        }
      }
      
       console.log(not_prime)
    for (let b = 2; b <= input; b++) {
      all_num.push(b)
    }
    
    let prime = all_num.filter(i => !not_prime.includes(i))
    console.log(prime)
    console.log(prime.length)
    console.log(prime.slice(-1))
    
  }
  Problem_1r_1()
  