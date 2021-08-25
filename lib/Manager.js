const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(managerName, managerId, managerEmail, officeNumber) {
        const name = managerName;
        const id = managerId;
        const email = managerEmail;

        super(name, id, email)
        if (typeof(officeNumber) == "string") {
            throw new Error("Office Number needs to be a number")
        }
        this.preOfficeNumber = officeNumber.toString(10).split("").map(Number)
        this.officeNumber = `(${this.preOfficeNumber[0]}${this.preOfficeNumber[1]}${this.preOfficeNumber[2]})${this.preOfficeNumber[3]}${this.preOfficeNumber[4]}${this.preOfficeNumber[5]}-${this.preOfficeNumber[6]}${this.preOfficeNumber[7]}${this.preOfficeNumber[8]}${this.preOfficeNumber[9]}`
        this.role = "Manager"
    }
}

module.exports = Manager