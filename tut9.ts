// function sayhellow(name:string):void{
// console.log("hi ",name)
// }
// function user(name:string,callback:(name:string)=>void):void{
//     console.log("from the usamas site")
//     // let name="ali";
//     callback(name)
// }
// user("ali",sayhellow)
// console.log("start")
// setTimeout(()=>{
//     console.log("2 secont later")
// },2000);
// console.log("end")
function dosomething(callback:(result:string)=>void){
console.log("doing some thing")
callback("done")
}
dosomething(function(result:string):void{
    console.log("the work is ", result)
    
})