const joinArrayRemoveDuplicate = require("./problem2");

describe("", () => {
    it("", () => {
        expect(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])).toBe(["apel", "anggur", "lemon", "leci", "nanas"]);
    })
    it("", () => {
        expect(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])).toBe(["samsung", "apple", "sony", "xiaomi"]);
    })
    it("", () => {
        expect(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"])).toBe(["football", "basketball"]);
    })
}
)
