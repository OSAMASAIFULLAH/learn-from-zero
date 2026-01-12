// let promises=new Promise((resolve,rejected)=>{
//     let res=false;
//     if(res){
//         resolve("the promises complete succesfully")
//     }
//     else{
//         rejected("there is an error in data fetching")
//     }
    
// })
// promises.then(()=>{
// console.log("operation is complete")
// }).catch((resu)=>{
//     console.log(resu)
// }).finally(()=>{
//     console.log("operation complete")
// })
// function fatchdata(){
//     let status=true
//     return new Promise((reslove,rejected)=>{
//         if(status){
//             reslove({name:"usama",age:"25"})
//         }
//         else{
//             rejected("fail to fatch data")
//         }
//     })
// }
// fatchdata().then((user)=>{
//     console.log(user)

// }).then((me)=>{
//     console.log(me)
// })
// .catch((err)=>{
//     console.log(err)
    
// }).finally(()=>{
//     console.log("operation completer")
// })
const p1 = new Promise((reso,resolve) => setTimeout(() => resolve("P1 done"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 4000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 done"), 6000));

Promise.race([p1, p2, p3])
  .then((result) => console.log("Winner:", result)).catch((err)=>{
    console.log("offff",err)
  })

