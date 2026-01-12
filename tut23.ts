// function add(a,b,c){
//     return a+b+c
// }
// console.log(add(1,2,3))
// function add(a){
//     return function(b){
//      return function(c){
//         return function(){
//             return a+b+c
//         }
//      }
//     }
// }
// const first=add(2)
// const second=first(3)
// const third=second(4)
// console.log(third())
// const sendmessage=from=>to=>message=>console.log(`${from} send ${message} to ${to}`)
// const fromusama=sendmessage("usama")
// const toali=fromusama("ali")
// toali("hellow")
// toali("how are you")
// let student={
//     name:'usama',
//     f_name:"ali"
// }
// // key="name"
// // student[key]="ajmali"
// alert(student['name'])
// localStorage.setItem({'a'='usama'})
let user={
    name:'usama',
    fname:'saifullah',
    class:'10th',
    marks:700
}
let jsonuser=JSON.stringify((user))
console.log(jsonuser)
let objectuser=JSON.parse(jsonuser)
console.log(objectuser)