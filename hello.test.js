const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello("world")).toBe("Hello world!");
});
