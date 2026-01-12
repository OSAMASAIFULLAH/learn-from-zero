const fs = require('fs');

console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
}, 0);

setImmediate(() => console.log("4"));

fs.readFile(__filename, () => {
  console.log("5");

  setTimeout(() => console.log("6"), 0);

  Promise.resolve().then(() => console.log("7"));

  setImmediate(() => console.log("8"));
});

Promise.resolve().then(() => console.log("9"));

console.log("10");
