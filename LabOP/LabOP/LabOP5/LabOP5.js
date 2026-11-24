"use strict";

const assert = require("node:assert");

// ---------- 1. seq(...args):
const seq = (...initial) => {
  const fns = [...initial];

  const chain = (arg) => {
    if (typeof arg === "function") {
      fns.push(arg);
      return chain;
    }
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };

  return chain;
};

// ---------- 2. array():

const array = () => {
  const items = [];

  const accessor = (index) => items[index];
  accessor.push = (value) => {
    items.push(value);
  };
  accessor.pop = () => items.pop();

  return accessor;
};
