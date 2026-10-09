"use strict";

const data = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  3.14,
  "JavaScript",
  null,
  undefined,
  42n,
  Symbol("id"),
  {},
  [],
  () => {},
  NaN,
  0,
  "",
  Infinity,
];

// Версія 1: ключі задані одразу
const counter1 = (arr) => {
  const res = {
    number: 0,
    string: 0,
    boolean: 0,
    bigint: 0,
    symbol: 0,
    undefined: 0,
    object: 0,
    function: 0,
  };
  for (const item of arr) res[typeof item]++;
  return res;
};

// Версія 2: ключі додаються динамічно
const counter2 = (arr) => {
  const res = {};
  for (const item of arr) {
    const type = typeof item;
    res[type] = (res[type] ?? 0) + 1;
  }
  return res;
};

console.dir(counter1(data));
console.dir(counter2(data));

module.exports = { counter1, counter2 };
