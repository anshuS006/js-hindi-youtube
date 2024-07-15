const coding = ["java","js","ruby","cpp","python"]
// coding.forEach( function (item){
//     console.log(item);
// })
// coding.forEach((item)=>{
// console.log(item);
// })
// function printMe(item){
//     console.log(item);
// } 
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})
const myCoding = [
    {
        language:"js",
        languageFile:"java scripte"
    },
    {
        language:"java",
        languageFile:"javadeve"
    },
    {
        language:"kotlin",
        languageFile:"kotlinadvs"
    }
]
myCoding.forEach((item)=>{
    console.log(item.language);
})