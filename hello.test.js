const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello("world")).toBe("Hello world!");
  expect(hello("DJ")).toBe("Hello Professor DJ!");
  expect(hello("Ray")).toBe("Hello Professor Ray!");
  expect(hello("Audrey")).toBe("Hello President Audrey!");
});
