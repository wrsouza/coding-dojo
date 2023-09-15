const { Jogar, pedra, papel, tesoura } = require("./index.js");

//papel
test("papel x tesoura", () => {
  expect(Jogar(papel, tesoura)).toBe(tesoura);
});

test("papel x tesoura", () => {
  expect(Jogar(papel, tesoura)).toBe(papel);
});

test("papel x papel", () => {
  expect(Jogar(papel, papel)).toBe(papel);
});

//pedra
test("pedra x tesoura", () => {
  expect(sum1(2)).toBe(3);
});

test("pedra x tesoura", () => {
  expect(sum1(2)).toBe(3);
});

test("pedra x pedra", () => {
  expect(sum1(2)).toBe(3);
});

//tesoura
test("tesoura x papel", () => {
  expect(sum1(2)).toBe(3);
});

test("tesoura x pedra", () => {
  expect(sum1(2)).toBe(3);
});

test("tesoura x tesoura", () => {
  expect(sum1(2)).toBe(3);
});
