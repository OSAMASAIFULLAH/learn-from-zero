// let a=true
// if(a){
//     var b=4;
// }
// console.log(b)
// let x=Symbol("test")
// console.log(typeof x)
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// sayhi()
// var sayhi=function(){
//     console.log("hellow")
// }
// const obj={
//     name:"usama",
//     greet:function(){
// console.log(this.name)
//     }
// }
// obj.greet()
// function arg(){
//     console.log(arguments)
// }
// arg(1,2,3,4)
// let arg=(...arg)=>{
// console.log(arg)
// }
// arg(1,2,3,4)
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let newFruits = fruits.slice(0, 3); 
// console.log(newFruits); // ["Banana", "Mango"]
// console.log(fruits); 
let person = {
    name: "Usama",
    age: 22,
    city:"gilgit"
};

let {name:name1,age}=person
console.log(name1+age)