function fun1(clb1:(clb1:()=>void)=>void){
  clb1(function(clb3:(clb3:()=>void)):void{
    console.log("this is clb2")
    clb3(function(){
      console.log("this is clb4")
    })
  })
  
}
fun1(function(clb2:(clb2:()=>void)=>void){
  console.log("this is clb1")
  clb2(function(clb4:()=>void):void{
    console.log("this is clb3")
    clb4()
  })
})

