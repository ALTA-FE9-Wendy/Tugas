const shallPassed = 30;
let steps = 0;

function generateRandomSteps() {
    // don't touch it
    return Math.ceil(Math.random() * 10);
}

function generateRandomSeconds() {
    // don't touch it
    return Math.ceil(Math.random() * 10000);
}

function snakesAndLaddersGame(stepNow, seconds, callback) {

    let steps = generateRandomSteps()
    seconds = generateRandomSeconds()

    stepNow += steps

    setTimeout(() => {
        console.log(
            "time", seconds / 1000, "step", steps, "moved", stepNow - steps, "current", stepNow
        );
        callback(stepNow);

    }, seconds
    )

}

snakesAndLaddersGame(steps, 0, (stepNow) => {
    snakesAndLaddersGame(stepNow, 0, (stepNow) => {
        snakesAndLaddersGame(stepNow, 0, (stepNow) => {
            snakesAndLaddersGame(stepNow, 0, (stepNow) => {
                snakesAndLaddersGame(stepNow, 0, (stepNow) => {
                    if (stepNow > shallPassed) {
                        console.log("pass")
                    } else {
                        console.log("fail")
                    }
                })
            })
        })
    })
})
