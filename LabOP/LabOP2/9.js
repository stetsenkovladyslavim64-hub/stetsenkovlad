"use strict";

const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Julius Caesar", phone: "+380445554434" },
  { name: "Nero", phone: "+380445554435" },
];

const findPhoneByName = (name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) return entry.phone;
  }
};

console.log(findPhoneByName("Nero")); // +380445554435

module.exports = { phoneBook, findPhoneByName };
