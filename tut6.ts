// let a:number=6;
// function show(){
//     console.log("this inside the function ",a)
//     // console.log("this this the var veriable ",b)
//     var b:number=45;
// }
// show()
// console.log("this is out side the function ",a)

// console.log("this is the var scope ",b)
//cluser in java script
// function outer(){
//     var a:number=30
//     console.log("the number of outer function ",a)
//     function innner(){
//         console.log("the outer veriable inside the the function ",a)
//     }
//     innner()
// }
// outer()
function counter(){
    let count:number=0
    return ()=>{
        count++
        console.log("the count is ",count)
    }
}
let fn=counter()
fn()
fn()
fn()
fn()