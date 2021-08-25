const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(internName, internId, internEmail, school) {
        const name = internName;
        const id = internId;
        const email = internEmail

        super(name, id, email)
        this.school = school
        this.role = "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern