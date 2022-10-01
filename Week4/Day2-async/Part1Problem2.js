const clothes = {
    item: "clothes",
    price: 15000,
    time: 3000,
};

const pants = {
    item: "pants",
    price: 25000,
    time: 7000,
};

const hat = {
    item: "hat",
    price: 22000,
    time: 2000,
};

const shoes = {
    item: "shoes",
    price: 46000,
    time: 10000,
};

function buyApparel(money, objItem, callback) {
    money -= objItem.price;
    setTimeout(() => {
        console.log("current money", money + objItem.price)
        console.log("buying", objItem.item, "price", objItem.price)
        console.log("need", objItem.time, "s")
        callback(money);
    }, objItem.time)
}

buyApparel(150000, clothes, (sisa) => {
    buyApparel(sisa, pants, (sisa) => {
        buyApparel(sisa, hat, (sisa) => {
            buyApparel(sisa, shoes, (sisa) => {
                console.log("change", sisa)
            })
        })
    })
})

// //saya membawa uang sebesar Rp. 110.000
// saya ingin membeli topi
// dengan harga Rp. 22.000
// dan waktu yang dibutuhkan adalah 2 detik

// saya membawa uang sebesar Rp. 88.000
// saya ingin membeli sepatu
// dengan harga Rp. 46.000
// dan waktu yang dibutuhkan adalah 10 detik

// sisa kembaliannya adalah Rp. 42.000
