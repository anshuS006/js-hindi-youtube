const myNums=[1,2,3]

// const myTotel = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and current: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotel);
const myTotal = myNums.reduce((acc,curval)=>(acc+curval),0)
//console.log(myTotal);
const shoppingCart = [
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"JAVA course",
        price:2999
    },
    {
        itemName:"Android course",
        price:2999
    },
    {
        itemName:"pythan course",
        price:2999
    }
]
const finalPrice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(finalPrice);