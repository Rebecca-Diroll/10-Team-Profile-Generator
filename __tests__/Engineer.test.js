const Engineer = require("../models/EngineerClass");

describe("Engineer", () => {

    const engineer = new Engineer("Dan", "03", "dan@email.com", "gitDan");
    
        it("returns Engineer role", () => {
            let role = engineer.getRole();
            expect(role).toBe("Engineer");
        });

        it("returns github user name", () => {
            let github = engineer.getGithub();
            expect(github).toBe("gitDan");
        });
});