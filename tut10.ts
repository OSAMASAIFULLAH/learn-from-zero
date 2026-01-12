class banckAcount{
    private belance:number=0;
    public name:string
    constructor(name:string,belance:number){
        this.name=name;
        this.belance=belance

    }
    setbelance(belance:number):void{
        if(belance>0){
            this.belance+=belance
        }
        else{
            console.log("invelid belance")
        }
    }
    getbelance():void{
     console.log("your current amount is ",this.belance)
     console.log("the acount awner name is ",this.name)
    }

}
let acount=new banckAcount("usama",100)
acount.name="ali heither"
acount.getbelance();