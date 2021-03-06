//
//
//

const Employee = require("../assets/js/employee");
const empNum1 = new Employee('John', 1, 'JOHN@gmail.com');

// ?============= Employee =============

describe("Employee Class Tests", () => {
  test('Employee Name', () => {
    expect(empNum1.getName()).toBe("John");
  })

  test('Employee Email', () => {
    expect(empNum1.getEmail()).toBe('JOHN@gmail.com');
  })

  test('Employee ID', () => {
    expect(empNum1.getID()).toBe(1);

  })

});

//!========================= EOF =========================