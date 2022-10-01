const palindrome = require("./problem4");

describe("", () => {
    it("", () => {
        expect(palindrome("civic")).toBe("true");
    })
	it("", () => {
        expect(palindrome("katak")).toBe("true");
    })
	it("", () => {
        expect(palindrome("kasur rusak")).toBe("true");
    })
	it("", () => {
        expect(palindrome("kupu-kupu")).toBe("false");
    })it("", () => {
        expect(palindrome("lion")).toBe("false");
    })
}
)

console.log(palindrome("civic"))       // true
console.log(palindrome("katak"))       // true
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("kupu-kupu"))   // false
console.log(palindrome("lion")) 
