function addTwoNumbers(num1,num2){
    return num1+num2
}
const result =addTwoNumbers(3,5)
//console.log("result ",result);
function loginUserMessage(username){
    return `${username} just logged in`
}
const loginMessage = loginUserMessage("anshuman")
//console.log(loginMessage);
function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,300,400))
const user={
    username:"anshum",
    price:29
}
function handalObjects(anyObjects){
    console.log(`user name is ${anyObjects.username} and price is ${anyObjects.price}`);
}
//handalObjects(user)
handalObjects({
    username:"uma",
    price:45
})
const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300]))