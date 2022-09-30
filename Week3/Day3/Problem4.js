function findMedian(arr) {
    arr = arr.sort(function (a, b) {
       return a - b;
   });
   console.log(arr)

   var median = 0
   var length = arr.length
   console.log(length)

   if (length % 2 == 0) {
       median = arr[length / 2]
   } else {
       median = arr[((length + 1) / 2)-1]
   }
   return median
}

function findMean(arr) {
    let sum = 0
    let i = 0
    
    while (i<arr.length) {
        sum+=arr[i];
        i++;
    }
    
    return sum/arr.length 
}

console.log(findMean([10,20,30]))