const Manager = require("../models/ManagerClass");

describe("Manager", () => {

    const manager = new Manager("Sarah", "Em02", "sarah@email.com", "Of02");
    
        it("returns Manager role", () => {
            let role = manager.getRole();
            expect(role).toBe("Manager");
        });

        it("returns office number", () => {
            let office = manager.getOffice();
            expect(office).toBe("Of02");
        });
});