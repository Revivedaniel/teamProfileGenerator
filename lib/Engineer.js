const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(engineerName, engineerId, engineerEmail, gitHub) {
        const name = engineerName;
        const id = engineerId;
        const email = engineerEmail;

        super(name, id, email)
        this.gitHub = gitHub;
        this.role = "Engineer"
    }

    getGitHub() {
        return `github.com/${this.gitHub}`
    }
}

module.exports = Engineer