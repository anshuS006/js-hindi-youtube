// primitive data type
//7 type : String,Number,Boolean,null,undefined,BigInt,Symbol

const score=100
const scoreValue=200.99
const isLoggedIn=true
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)
const bigNumber=3849849849489484984984n
const heros=["saktiman","aryman","sakti"]
let myObj = {
    name:"anshu",
    age:23,
    email:"anshu@gmal.com"
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof bigNumber)
console.log(typeof outSideTemp)




//Reference type Non primitive
//Array, Objects,Functions