const arr = [1,2,3,4,5]
for (const iterator of arr) {
    //console.log(iterator);
    
}
const greetings = "hello world"
for (const greet of greetings) {
    //console.log(greet);
}
//Map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")

//console.log(map);
for (const [key,value] of map) {
  //  console.log(key,':-',value);    
}
const myObj = {
    game1:'nfs',
    game2:'hitman'
}
for (const [key,value] of myObj) {
    console.log(key,':-',value);
    
}