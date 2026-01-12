function add(a:number,b:number):number{
    console.log(a+b)
    return 6+8
}
console.log(add(4,5))
function fatchdata(messages:string,callback){
    console.log("the data is fatching........")
    callback(messages)
}
function showdata(messages:string){
console.log(messages)
}
fatchdata("the data is showing here",showdata)
function calculator(a,b,add){
    
}