"use strict";

const assert = require("node:assert");

// 1.for:
const sumFor = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// 2. for..of:
const sumForOf = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};

// 3.while:
const sumWhile = (...args) => {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

// 4.do..while:
const sumDoWhile = (...args) => {
  if (args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};

// 5. Array.prototype.reduce:
const sumReduce = (...args) => args.reduce((total, value) => total + value, 0);

// ---------- 6. Максимум у двовимірному масиві ----------

const max = (matrix) => {
  let result = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > result) result = value;
    }
  }
  return result;
};

// ---------- 7.цикл for..in  ----------

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const { born, died } = persons[name];
    result[name] = died - born;
  }
  return result;
};

// ---------- Перевірка ----------

// for (const sum of [sumFor, sumForOf, sumWhile, sumDoWhile, sumReduce]) {
//   assert.strictEqual(sum(1, 2, 3), 6);
//   assert.strictEqual(sum(0), 0);
//   assert.strictEqual(sum(), 0);
//   assert.strictEqual(sum(1, -1, 1), 1);
//   assert.strictEqual(sum(10, -1, -1, -1), 7);
// }

// assert.strictEqual(
//   max([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   9,
// );
// assert.strictEqual(max([[-5, -2], [-9]]), -2);

// const persons = {
//   lenin: { born: 1870, died: 1924 },
//   mao: { born: 1893, died: 1976 },
//   gandhi: { born: 1869, died: 1948 },
//   hirohito: { born: 1901, died: 1989 },
// };
// assert.deepStrictEqual(ages(persons), {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// });

// console.log();
// console.log(
//   max([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );
// console.log(ages(persons));
