function calculator(a,b,operation){
    operation(a,b)
    return function get(){
        console.log("hellow worls")
    }
}
function add(a,b){
    console.log(a+b)
}
function multiply(a,b){
    console.log(a+b)
}
// calculator(1,2,add)
// console.log()
a=calculator(4,5,multiply)
a()