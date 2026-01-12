class person{
    constructor(name:string){
        this.name=name

    }
    showdata(){
        console.log("hellow ",this.name)
    }
}
class student extends person{
constructor(id:number,name:string){
    super(name)
    this.id=id;
}
getid(){
    console.log("my id is ",this.id)
}
}
let p2=new student(34,"usa,a")
p2.showdata()
p2.getid()