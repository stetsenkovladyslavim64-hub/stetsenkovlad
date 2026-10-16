const fn = () => {
  const obj1 = { name: "Marcus" };
  let obj2 = { name: "Marcus" };

  obj1.name = "Julius";
  obj2.name = "Julius";

  obj2 = { name: "Other" };

  return { obj1, obj2 };
};

const createUser = (name, city) => ({ name, city });
console.log(fn());
console.log(createUser("Marcus Aurelius", "Roma"));
