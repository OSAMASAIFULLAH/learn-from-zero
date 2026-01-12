// console.log("start")
// setTimeout(()=>{
//     console.log("the call back function are run in 2 second")
// })
// console.log("end")
// console.log("start")
// const fatchdata=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("data fatch")
//     },2000)
// // })
// fatchdata.then((message)=>{
//     console.log(message);
//     console.log("now processing data....")
// }).catch((error)=>{
//     console.log("the error messag ",error)
// });
// console.log("end")
function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("the data is fatched")
        },2000)
    })
}
async function processdata(){
    try{
const result= await fetchdata();
console.log("the result is ",result)
console.log("now processing data...")
}
catch(message){
    console.log("the error is",message)
}
}
processdata();
console.log("end")