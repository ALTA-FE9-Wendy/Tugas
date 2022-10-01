function jajanBoba(uang, callback) {
    console.log("uang kamu sekarang adalah : Rp." + uang);
    console.log("kamu jajan boba dengan harga Rp.5000");

    if (uang > 5000) {
        uang = uang - 5000;
        setTimeout(function () {
            console.log("sisa uang kamu Rp." + uang);
        }, 5000);
        callback(uang);
    } else {
        setTimeout(function () {
            console.log("maaf uang kamu belum cukup untuk membeli boba");
        }, 2000);
        setTimeout(function () {
            console.log("sisa uang kamu Rp." + uang);
        }, 2000);
    }
}

function jajanSeblak(uang) {

        console.log("kamu jajan seblak dengan harga Rp.8000");

    if (uang > 8000) {
        uang = uang - 8000;
        setTimeout(function () {
            console.log("sisa uang kamu Rp." + uang);
        }, 9000);
    } else {
        setTimeout(function () {
            console.log("maaf uang kamu belum cukup untuk membeli seblak");
        }, 2000);
        setTimeout(function () {
            console.log("sisa uang kamu Rp." + uang);
        }, 2000);
    }
}

jajanBoba(20000, jajanSeblak);


// //kamu jajan boba dengan harga Rp. 5000
// sisa uang kamu Rp. 15000

// kamu jajan seblak dengan harga Rp. 8000
// sisa uang kamu sebesar Rp. 7000
