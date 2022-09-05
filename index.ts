import * as readline from 'readline';
import fetch from 'node-fetch';
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question("Github Camoo Linkiniz: ", async function (answer){
setInterval(async function(){
    let i = 0
    i = i + 1
if(!answer){
    console.error("Lütfen Camoo Linkinizi giriniz!")
}
  await fetch(answer)
console.log(`Booster Kullanıldı! `)
},1000)
})
