const prime = require("../js/jest");

describe("prime", () => {
    it("comment", () => {
        expect(prime(5)).toBe("prime");
    });
    it("comment2", () => {
        expect(prime(8)).toBe("not prime");
    });
    it("comment3", () => {
        expect(prime(0)).toBe(undefined);
    });

}
)