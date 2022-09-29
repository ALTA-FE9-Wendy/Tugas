function coinChange(amount) {
    const coins = {
      twentyFiveCent: 25,
      tenCent: 10,
      fiveCent: 5,
      oneCent: 1,
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
  
  console.log(coinChange(26))