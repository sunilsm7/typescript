import { MustHaveCoffee } from './src/coffee/getcoffee'
let hello:any = "Hii"
var hi = 'Hello'

hello = 123
let abc = "another"
console.log("Hello world")

function f(input:boolean){
    let a= 100
    if(input){
        let b = a + 10012
        return b;
    }
    return a;
}

console.log(f(true))
console.log(f(false))

let coffee = new MustHaveCoffee()
