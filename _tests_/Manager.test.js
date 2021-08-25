const Manager = require("../lib/Manager");

describe("Manager", () => {
    //Testing that the manager has an office number
    it("Should return the phone number of (123)867-5309", () => {
        const obj = new Manager("Daniel", 1, "Daniel@fakeemail.com", 1238675309)
        expect(obj.officeNumber).toBe("(123)867-5309")
    })
    //Testing that the getRole will return Manager
    it("Should return Manager", () => {
        const obj = new Manager("Daniel", 1, "Daniel@fakeemail.com", 1238675309)
        expect(obj.getRole()).toBe("Manager")
    })
    //Testing the validation of the phone number
    it("Should throw error of Office Number needs to be a number", () => {
        const obj = new Manager("Daniel", 1, "Daniel@fakeemail.com", "officeNumber")
        const err = new Error("Office Number needs to be a number")
        expect(() => obj).toThrow(err)
    })
})