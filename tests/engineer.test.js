//
//
//

const Engineer = require("../assets/js/engineer");
const engr1 = new Engineer('Dave', 2, 'DAVE@gmail.com', "DesertCow");

// ?============= Engineer =============

describe("Engineer Class Tests", () => {
  test('Engineer Manager Name', () => {
    expect(engr1.getName()).toBe("Dave");
  })

  test('Engineer Manager Email', () => {
    expect(engr1.getEmail()).toBe('DAVE@gmail.com');
  })

  test('Engineer Manager ID', () => {
    expect(engr1.getID()).toBe(2);

  })

  test('Engineer GitHub', () => {
    expect(engr1.getGitHubName()).toBe("DesertCow");
  })

  test('Engineer Role', () => {
    expect(engr1.getRole()).toBe("Engineer");

  })
});
//!========================= EOF =========================