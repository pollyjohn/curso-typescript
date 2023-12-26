"use strict";
let nome = 'John'; // same as let nome: string = 'John'  
console.log(nome);
//nome=28
//numbers
let age = 27; // same as let age: number = 27
//age = ana
age = 27.5;
console.log(age);
// boolean
let haveHobbies = false; // same as let haveHobbies: boolean = 'false'
//haveHobbies = 1
console.log(haveHobbies);
// tipos explicitos/dinâmicos (any)
let myAge;
//let myAge: any
myAge = 24;
console.log(typeof myAge);
myAge = 'age is 24';
console.log(myAge);
// arrays
let hobbies = ['cook', 'soccer', 'swim'];
console.log(hobbies[1]);
console.log(hobbies);
hobbies = [30, 's'];
console.log(hobbies);
// tuples
let endereço = ['AV saintskin', 99, 'B3'];
console.log(endereço);
//endereço = ['St saint claire',1243]
//console.log(endereço)
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Black"] = 0] = "Black";
    Cor[Cor["Grey"] = 1] = "Grey";
    Cor[Cor["Blue"] = 100] = "Blue";
    Cor[Cor["Green"] = 101] = "Green";
    Cor[Cor["Yellow"] = 102] = "Yellow";
    Cor[Cor["Orange"] = 103] = "Orange";
    Cor[Cor["Red"] = 104] = "Red";
})(Cor || (Cor = {}));
let mySecColor = Cor.Grey;
let myColor = Cor.Green;
console.log(myColor);
console.log(mySecColor);
//any
let vehicle = 'BMW';
console.log(vehicle);
vehicle = { brand: 'BMW', year: 2023 };
console.log(vehicle);
// functions
function returnMyName() {
    //return Age
    return nome;
}
console.log(returnMyName());
function returnOi() {
    console.log('Oi!');
    //return myAge
}
returnOi();
function multiplier(numA, numB) {
    return numA * numB;
}
//console.log(multiplier(3,'halley'))
console.log(multiplier(3.2, 2));
