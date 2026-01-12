function greet(greeting, emoji) {
  console.log(greeting + ", " + this.name + " " + emoji);
}

const person = { name: "Usama" };

const sayHi = greet.bind(person);
sayHi("hellow","😊");