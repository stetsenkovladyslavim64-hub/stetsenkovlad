// --1
function iterate(object, callback) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback(key, object[key], object);
    }
  }
}

const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
  console.log({ key, value });
});

// --2
function store(value) {
  return function () {
    return value;
  };
}

const read = store(5);
const value = read();

console.log(value);

// --3
function contract(fn, ...types) {
  return function (...args) {
    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];

    if (args.length !== argTypes.length) {
      throw new TypeError("Невірна кількість аргументів");
    }

    for (let i = 0; i < argTypes.length; i++) {
      if (
        !(args[i] instanceof argTypes[i]) &&
        typeof args[i] !== argTypes[i].name.toLowerCase()
      ) {
        throw new TypeError("Невірний тип аргументу: " + i);
      }
    }

    const result = fn(...args);

    if (
      !(result instanceof returnType) &&
      typeof result !== returnType.name.toLowerCase()
    ) {
      throw new TypeError("Невірний тип повернення");
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

const res2 = concatStrings("Hello ", "world!");
console.dir(res2);
