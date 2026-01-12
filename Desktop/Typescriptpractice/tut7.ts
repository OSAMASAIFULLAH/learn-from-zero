class counter1{
    public  count:number=0;
    counters() {
       this.count++
        console.log("the count is ",this.count)
    }
    
}
let obj=new counter1
obj.counters()
obj.counters()
obj.counters()