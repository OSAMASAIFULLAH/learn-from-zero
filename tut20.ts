// function person(name:string,age:int){
//     this.name=name
//     this.age=age
//    function show(){
// console.log(this.name)
//     }
// }
// function student(name,id,age){
//     person.call(this,name,age)
//     this.id=id
// }
// person.prototype.sayhi=function(){
//     console.log("hellow usama")
// }
// student.prototype = Object.create(person.prototype);
// p1=new student("usama",34,22)
// console.log(p1.name)
// console.log(p1.id)
// console.log(p1.age,"year")
// p1.sayhi()
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(nam, ag, id) {
  Person.apply(this, [nam, ag]); // 👈 using apply instead of call
  this.id = id;
}

const s1 = new Student("Usama", 22, 101);
console.log(s1);