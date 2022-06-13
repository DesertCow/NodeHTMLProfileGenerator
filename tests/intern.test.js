//
//
//

const Intern = require("../assets/js/intern");
const intern1 = new Intern('Pete', 3, 'pistolPete@gmail.com', "Oklahoma State University");

// ?============= Intern =============

test('Intern Manager Name', () => {
  expect(intern1.getName()).toBe("Pete");
})

test('Intern Manager Email', () => {
  expect(intern1.getEmail()).toBe('pistolPete@gmail.com');
})

test('Intern Manager ID', () => {
  expect(intern1.getID()).toBe(3);

})

test('Intern School', () => {
  expect(intern1.getSchool()).toBe("Oklahoma State University");
})

test('Intern Role', () => {
  expect(intern1.getRole()).toBe("Intern");

})

//!========================= EOF =========================