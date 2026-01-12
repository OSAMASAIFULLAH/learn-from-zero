// function show(nam:string){
// this.name=nam;
// // console.log(this.name)
// // console.log(age)
// }
// // show.age=23;
// // console.log(show.age)
// const s1=new show("usama")
// console.log(s1.name)
function student(){
    
}
student.prototype.sayhi=function(){
    console.log("hellow usama")
}
s1=new student()
s1.sayhi()
console.log(s1.__proto__===student.prototype)