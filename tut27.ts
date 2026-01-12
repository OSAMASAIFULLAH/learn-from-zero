function greet(city,country){
    console.log(`hellow ${this.name} from ${country} ${city}`)
}
user={
    name:"usama"
}
greet1=greet.bind(user,"lahore","pkistan")
greet1()