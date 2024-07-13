//const tendarUser = new Object()
const tendarUser = {}
tendarUser.id = "01"
tendarUser.name = "anshuman"
tendarUser.email = "anshu@gmail.com"
tendarUser.isLoggedIn=true
// console.log(tendarUser)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//const returnObj=Object.assign({},obj1,obj2,obj3)
const obj4 ={...obj1,...obj2,...obj3}
//console.log(obj4)
//console.log(tendarUser)
const course = {
    courseName:"Js course",
    price:"999",
    courseInstructor:"anshu"
}
const {courseInstructor:instructor}=course
console.log(instructor);


