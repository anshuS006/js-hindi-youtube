//for
const myArray=["batman","superman","pkyman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}
//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("detacted 5");
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detacted 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}