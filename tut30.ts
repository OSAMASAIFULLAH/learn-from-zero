function debounce(fn:()=>void,delay:number){
    let timer:any
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn();
        },delay)
    }
}
const sayHello = () => {
  console.log("Hello");
};
const debouncedHello = debounce(sayHello, 1000);
debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();