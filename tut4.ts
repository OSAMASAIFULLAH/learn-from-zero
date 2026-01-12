// function isgraterthen3(value){
//     return value>3
// }
// function check(fn){
//     console.log(fn(5))
// }
// check(isgraterthen3)
// function run(fn){
//     console.log(fn(5))
// }
// run(value=>value>3)
// function run(fn:(value:number)=>boolean){
//     console.log(fn(5))
// }
//  function fn(value:number):boolean{
//     return value>3
// }
// run(fn)
// let a=value=>console.log(value)
// a(5)
function calculator(a:number,b:number, operation:(a:number,b:number)=>number){
    return operation(a,b)
}
function add(a:number,b:number){
    return(a+b)
}
console.log(calculator(2,3,add))