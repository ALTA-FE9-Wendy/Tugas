function minimizeBias(ratings) {
    // Write your code here
    //[ 1, 3, 5, 6 ]
    ratings = ratings.sort(function (a, b) {
        return a - b;
    });

    var temp1 = 0
    var temp2 = 0
    var counter = 0 //3


    while (ratings.length != 0) {
        console.log(ratings) // [1,3]
        temp1 = ratings[ratings.length - 1] // 6 //3
        temp2 = ratings[ratings.length - 2]//5 //1
        counter = temp1 - temp2 + counter //1 //(3-1)+1=3
        ratings.pop() // [1,3,5] //[1]
        ratings.pop()//[1,3] //[]
        

        // console.log(Math.max(...ratings));
        // ratings.pop()

        return (counter)

    }

   
}
console.log(minimizeBias([3,2,1,6]))