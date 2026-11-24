"use strict";

const assert = require("node:assert");

// 1. pipe:

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError(`pipe: ${String(fn)} is not a function`);
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

// 2. compose:
const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    try {
      let result = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      for (const handler of handlers) handler(error);
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event === "error") handlers.push(handler);
  };

  return composed;
};
