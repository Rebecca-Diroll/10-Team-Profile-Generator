const Intern = require("../models/InternClass");

describe("Intern", () => {

    const intern = new Intern("Lucas", "04", "lucas@email.com", "Ohio State");
    
        it("returns Intern role", () => {
            let role = intern.getRole();
            expect(role).toBe("Intern");
        });

        it("returns intern school", () => {
            let school = intern.getSchool();
            expect(school).toBe("Ohio State");
        });
});