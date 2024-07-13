// singeltone
// object literals
// Object.create
const mySym = Symbol("key1")
const jsUser = {
    name:"anshuman",
    "full name":"anshuma pratap singh",
    [mySym]:"key2",
    age:26,
    location:"kanpur",
    email:"anshu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(jsUser.age)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
jsUser.email = "ansuww@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "hfjfh@hjff.com"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("hello this is greeting");
}
jsUser.greetingTwo = function(){
    console.log(`hello user this is, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());