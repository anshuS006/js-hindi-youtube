// const coding = ["java","js","ruby","cpp","python"]
// const value = coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })
// console.log(value);
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=>(num>5))
// console.log(newNums)
// const newNums =myNums.filter((num)=>{
//     return num
// })
// const newNums =[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)
const books = [
    {title:"book one",genr:"fiction",publishing:1990,edition:2004},
    {title:"book two",genr:"fiction2",publishing:1991,edition:2003},
    {title:"book three",genr:"fiction3",publishing:1992,edition:2002},
    {title:"book four",genr:"fiction4",publishing:1993,edition:2002},
    {title:"book five",genr:"fiction5",publishing:1994,edition:2003},
    {title:"book six",genr:"fiction6",publishing:1995,edition:2004},
]
 let userBooks =books.filter((item)=>(item.edition>2002))
 userBooks =userBooks.filter((item)=>{return item.publishing>1992})

 //console.log(userBooks);

 const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const newNumbs = myNumbers.map((num)=>(num+10))
//  console.log(newNumbs);
const newNums = myNumbers.map((num)=>{return num*10}).map((num)=>(num+1)).filter((num)=>num>=40)
console.log(newNums);