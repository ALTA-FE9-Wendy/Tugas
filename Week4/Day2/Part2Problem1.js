const listColors = ["green", "yellow", "blue", "orange", "red"];

new Promise(function getRandomColor(warna) {
    console.log("loading ...");
    let randomcolor = Math.floor(Math.random() * 7);
    setTimeout(function () {
        console.log("generating random color...");
    }, 1000);
    if (randomcolor > 4) {
        setTimeout(function () {
            warna("Failed to get random color, please try again");
        }, 3000);
    } else {
        setTimeout(function () {
            warna("the color we got is " + listColors[randomcolor]);
        }, 3000);
    }
})

    .then((value) => console.log(value))
    .catch((error) => console.log(error));