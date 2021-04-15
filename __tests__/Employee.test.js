const Employee = require("../models/EmployeeClass");

describe("Employee", () => {

    const employee = new Employee("Rebecca", "01", "rebecca.diroll@gmail.com");
    
        it("returns employee name", () => {
            let name = employee.getName();
            expect(name).toBe("Rebecca");
        });

        it("returns employee id", () => {
            let id = employee.getId();
            expect(id).toBe("01");
        });

        it("returns employee email", () => {
            let email = employee.getEmail();
            expect(email).toBe("rebecca.diroll@gmail.com");
        });

        it("returns employee role", () => {
            let role = employee.getRole();
            expect(role).toBe("Employee");
        });
});