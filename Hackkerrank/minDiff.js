function minDiff(arr) {
    // var n = arr.shift([0])
    // console.log("n= " + n)

    arr = arr.sort(function (a, b) {
        return a - b;
    });

    console.log(arr)
    // console.log("arr0= " + arr[0])

    var counter = 0

    for (i = 0; i <= 5; i++) {
        counter = counter+arr[i + 1] - arr[i];
        console.log(arr);
        arr.splice(0,2);
        
        console.log("counter " + counter);
        // i = -1;
        if (arr ='') {
            break;
        }
    }


    return (counter)
}

function minDiff2(arr) {
    // var n = arr.shift([0])
    // console.log("n= "+n)

    arr = arr.sort(function (a, b) {
        return a - b;
    });

    var counter = 0

    for (let i = 0; i <= arr.length; i++) {
        counter += arr[i + 1];
        counter -= arr[i];
        console.log(counter)
    }


    return (counter)
}

function minDiffDone(arr) {
    // var n = arr.shift([0])
    // console.log("n= "+n)

    arr = arr.sort(function(a, b) {
        return a - b;
      });
    console.log(arr)

    var counter = 0

    for (let i=0; i<arr.length-1;i++) {
       counter = counter + arr[i+1];
       counter = counter - arr[i];
        
       console.log(counter)
       
    }


    return (counter)
}
console.log(minDiffDone([5, 1, 3, 7, 3]))
// console.log(minDiff2([2, 3, 2]))