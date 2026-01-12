function person(name){
this.name2=name
}
person.prototype.sayhi=function(){
   console.log("hellow",this.name)
}
function getinfo(name,id){
person.call(this,name)
this.id=id
}

let s2=new getinfo("usama",3)
console.log(s2.name2)
let s3=new person("ali")
console.log(s3.name2)