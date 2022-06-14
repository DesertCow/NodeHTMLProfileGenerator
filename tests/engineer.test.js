//
//
//

const Engineer = require("../assets/js/engineer");
const engr1 = new Engineer('Dave', 2, 'DAVE@gmail.com', "Dave2526");

// ?============= Engineer =============

describe("Engineer Class Tests", () => {
  test('Engineer Name', () => {
    expect(engr1.getName()).toBe("Dave");
  })

  test('Engineer Email', () => {
    expect(engr1.getEmail()).toBe('DAVE@gmail.com');
  })

  test('Engineer ID', () => {
    expect(engr1.getID()).toBe(2);

  })

  test('Engineer GitHub', () => {
    expect(engr1.getGitHubName()).toBe("Dave2526");
  })

  test('Engineer Role', () => {
    expect(engr1.getRole()).toBe("Engineer");

  })

});

//!========================= EOF =========================