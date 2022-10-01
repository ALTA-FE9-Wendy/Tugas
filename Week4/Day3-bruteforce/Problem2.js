function coinChange(amount) {
    const coins = {
      tenthousand: 10000,
      fivethousand: 5000,
      twothousand: 2000,
      onethousand: 1000,
      fivehundred: 500,
      twohundred: 200,
      onehundred : 100,
      fifty: 50,
      twenty: 20,
      ten: 10,
      one: 1,
    };
    let result = {};
    let moneyLeftover = amount;
  
    for (const key in coins) {

      while (moneyLeftover >= coins[key]) {
  
        if (result[key]) {
    
          result[key]++;
        } else {

          result[key] = 1;
        }
        moneyLeftover = (moneyLeftover - coins[key]).toFixed(2);

      }
    }
    return result;
  }
  
  console.log(coinChange(123))   // [100 20 1 1 1]
  console.log(coinChange(432))   // [200 200 20 10 1 1]
  console.log(coinChange(543))   // [500, 20, 20, 1, 1, 1]
  console.log(coinChange(7752))  // [5000, 2000, 500, 200, 50, 1, 1]
  console.log(coinChange(15321)) // [10000 5000 200 100 20 1]