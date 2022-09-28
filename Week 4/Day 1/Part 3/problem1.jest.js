const Problem_5_1 = require("./problem1");

describe("nilai", () => {
    it("", () => {
        expect(Problem_5_1("AKA", "AKASHI")).toBe("AKA");
    })
    it("", () => {
        expect(Problem_5_1("KANGAROO", "KANG")).toBe("KANG");
    })
    it("", () => {
        expect(Problem_5_1("KI", "KIJANG")).toBe("KI");
    })
    it("", () => {
        expect(Problem_5_1("KUPU-KUPU", "KUPU")).toBe("KUPU");
    })
    it("", () => {
        expect(Problem_5_1("ILALANG", "ILA")).toBe("ILA");
    })
}
);
