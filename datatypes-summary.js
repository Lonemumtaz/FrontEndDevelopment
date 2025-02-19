// 1. primitive ype datatypes;
// 7 types of datatypes => string, Number, Boolean,null,undefined,Symbol,BigInt
 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// const bigNumber = 345654758956531763n

// 2. Reference type(non primitive)
// Arrays,objects,Functions
const heros = ["shaktiman","naagraj", "doga"]
let myObj = {
    name:"mumtaz",
    age:18,
}
const myFunction = function(){
    console.log("Hello world!");
}
console.log(typeof bigNumber);
//link for documentation
//https://262.ecma-international.org/5.1/#sec-11.4.3

