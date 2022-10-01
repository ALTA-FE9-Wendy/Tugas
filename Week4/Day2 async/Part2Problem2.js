new Promise(function lottery(num) {
    
    let winningNumber = Math.ceil(Math.random() * 10);
    let userNumber = Math.ceil(Math.random() * 10);

    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda...")

    for (let i = 1; i <= 10; i++) {
        setTimeout(function timer() {
          console.log(i);
        }, i * 1000);
      }
      
    if (userNumber == winningNumber) {
        setTimeout(() => {
            num("selamat anda mendapatkan hadiah utama berupa mobil");
        }, 10000);
    } else {
        setTimeout(() => {
            num("maaf anda kurang beruntung");
        }, 10000);
    }
})
    .then((value) => console.log(value))
    .catch((error) => console.log(error));