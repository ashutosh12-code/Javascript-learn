"use strict";

// String to Number conversion
let score = "33";

console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33


// Non-numeric string conversion
let nameValue = "Ashutosh";

console.log(typeof nameValue); // string

let convertedNumber = Number(nameValue);

console.log(typeof convertedNumber); // number
console.log(convertedNumber); // NaN

let value = 0
let LoggedIn = Boolean(value);
console.log(LoggedIn) // this will result in false

let name=""
let logIn=Boolean(name)
console.log(logIn)

let Naam="Ashutosh"
let logInf=Boolean(Naam)
console.log(logInf)

//so our conclusion is that we can convert number into boolean 
// 0==> false
//1==>true
//empty string naam="" ==> false
// not empty string naam="Ashutosh" ==>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

