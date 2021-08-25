const Intern = require("../lib/Intern");

describe("Intern", () => {
    //Testing that the Intern has a school named UCI
    it("Should return UCI", () => {
        const obj = new Intern("Daniel", 1, "Daniel@fakeemail.com", "UCI")
        expect(obj.getSchool()).toBe("UCI")
    })
    //Testing that the getRole method returns Intern
    it("Should return Intern", () => {
        const obj = new Intern("Daniel", 1, "Daniel@fakeemail.com", "UCI")
        expect(obj.getRole()).toBe("Intern")
    })
})