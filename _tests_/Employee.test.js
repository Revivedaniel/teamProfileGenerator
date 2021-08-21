const Employee = require("../lib/Employee")

describe("Employee", () => {
    //Testing that the getName function returns the correct name when given a name in the form of a string
    it("Should return Daniel", () => {
        const obj = new Employee("Daniel", 1, "Daniel@fakeemail.com");
        expect(obj.getName()).toBe("Daniel")
    })
    //Testing that the getName function returns an error if the name passed to Employee isnt a string
    it("Should return an error of Name needs to be a string", () => {
        const obj = new Employee(1, 1, "Daniel@fakeemail.com");
        const err = new Error("Name needs to be a string");
        expect(() => obj.getName()).toThrow(err)
    })
    //Testing that the getId function returns correct id when given a number
    it("Should return Daniel@fakeemail.com", () => {
        const obj = new Employee("Daniel", 1, "Daniel@fakeemail.com");
        expect(obj.getId()).toBe(1)
    })
})