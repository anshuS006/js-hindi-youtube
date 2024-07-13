const marval_hero = ["thor","loki","ironman","hulk"]
const dc_hero = ["batman","superman","jokar"]
const all_heros2 = marval_hero.concat(dc_hero)
const all_heros = [...marval_hero,...dc_hero]
//console.log(all_heros2)
const another_array = [1,2,3,[4,5,6,[7,8,9],10,11],12,13]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)
console.log(Array.isArray("anshuman"))
console.log(Array.from("anshuman"))
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3))
