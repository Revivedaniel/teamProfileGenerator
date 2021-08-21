const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("Should return Daniel", () => {
        const obj = new Employee("Daniel", 1, "Daniel@fakeemail.com");
        expect(obj.getName()).toBe("Daniel")
    })
})