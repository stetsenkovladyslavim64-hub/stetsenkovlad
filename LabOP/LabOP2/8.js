"use strict";

const createUser = (name, city) => ({ name, city });

console.log(createUser("Marcus Aurelius", "Roma"));
// { name: 'Marcus Aurelius', city: 'Roma' }

module.exports = { createUser };
