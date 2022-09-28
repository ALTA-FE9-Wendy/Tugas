function palindrome(input) {
  let counter = 0
  let length = input.length
  let half_length = Math.floor(length / 2)
  let i = 0
  console.log(half_length + " half-length")
  while (i <= half_length) {
    if (input.charAt(i) == input.charAt(length - i - 1)) {
      counter++;
      i++;
      console.log(counter + " counter")
      if (counter == half_length) {
        return true
      }
    } else {
      return false
    }

  }
}

console.log(palindrome("civic"))       // true
console.log(palindrome("katak"))       // true
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("kupu-kupu"))   // false
console.log(palindrome("lion")) 
