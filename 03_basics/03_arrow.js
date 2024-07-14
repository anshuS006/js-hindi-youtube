const user ={
    username:"anshuman",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username ="anshuman"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username ="anshuman"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username ="anshuman"
//     console.log(this.username);
// }
// chai()

// const addTwoNumbes = (num1,num2)=>{ //explicit return
// return num1+num2
// }
// console.log(addTwoNumbes(3,4));

// const addTwoNumbes = (num1,num2)=> num1+num2 //implicit return
const addTwoNumbes = (num1,num2)=> ({username:"ansmhu"})


console.log(addTwoNumbes(3,4))