function Person(name) {
  this.name = name;
  setTimeout(()=> {
    console.log(this.name); // ❌ undefined
  }, 1000);
}

new Person("Usama");
// user.arrowFunc()