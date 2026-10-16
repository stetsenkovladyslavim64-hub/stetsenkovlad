"use strict";

const hash = {
  "Marcus Aurelius": "+380445554433",
  "Julius Caesar": "+380445554434",
  Nero: "+380445554435",
};

const findPhoneByName = (name) => hash[name];

console.log(findPhoneByName("Nero")); // +380445554435

module.exports = { hash, findPhoneByName };
