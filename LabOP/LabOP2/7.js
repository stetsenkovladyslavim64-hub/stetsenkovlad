"use strict";

const fn = () => {
  const obj1 = { name: "Marcus" };
  let obj2 = { name: "Marcus" };

  obj1.name = "Julius";
  obj2.name = "Julius";

  obj2 = { name: "Other" };
  return { obj1, obj2 };
};

console.log(fn());
module.exports = { fn };
