const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Tec";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() will return Intern", () => {
  const testValue = "Intern";
  const e = new Intern("test", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Tec";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
