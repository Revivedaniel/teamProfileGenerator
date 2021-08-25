const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    //Testing that the getGithub method returns github.com/Revivedaniel
    it("Should return github.com/Revivedaniel", () => {
        const obj = new Engineer("Daniel", 1, "Daniel@fakeemail.com", "Revivedaniel")
        expect(obj.getGitHub()).toBe("github.com/Revivedaniel")
    })
})