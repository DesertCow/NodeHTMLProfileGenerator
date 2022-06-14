//
//
//

const Manager = require("../assets/js/manager");
const man1 = new Manager('Clay', 2, 'clay23@gmail.com', "CH-7 456");

// ?============= Manager =============

describe("Manager Class Tests", () => {
  test('Manager Name', () => {
    expect(man1.getName()).toBe("Clay");
  })

  test('Manager Email', () => {
    expect(man1.getEmail()).toBe('clay23@gmail.com');
  })

  test('Manager ID', () => {
    expect(man1.getID()).toBe(2);

  })

  test('Manager Office', () => {
    expect(man1.getOffice()).toBe('CH-7 456');

  })

  test('Manager Role', () => {
    expect(man1.getRole()).toBe("Manager");

  })
});

// !========================= EOF =========================