"use strict";

const assert = require("node:assert");

//  1. removeElement:
const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

// 2. removeElements:
const removeElements = (array, ...items) => {
  for (const item of items) {
    removeElement(array, item);
  }
};

// 3. unique:
const unique = (array) => [...new Set(array)];

// 4. difference:
const difference = (array1, array2) =>
  array1.filter((item) => !array2.includes(item));
