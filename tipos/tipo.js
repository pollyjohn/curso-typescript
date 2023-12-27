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
// two different ways to define a function
const test = function (x, y) { return x * y; };
function testing(x, y) { return x * y; }
console.log(test(1.2, 5));
console.log(testing(3, 9.7));
// type function. Another way to define a function. Using arrow sintax:
let calculus;
//calculus = returnOi
//calculus()
calculus = multiplier;
console.log(calculus(5.7, 6));
// Challenge
/*
    create an object named employee with:
        - Array of strings with the name of the supervisors
        - function check-in that receives the exact hour the employee checked-in (number)
            and return a string
            -> normal check-in hour (<= 8)
            -> late (> 8)
*/
let employee = {
    supervisors: ['Ana', 'Fernando'],
    checkIn(horario) {
        if (horario <= 8) {
            return 'OK';
        }
        else {
            return 'late!';
        }
    }
};
console.log(employee.supervisors);
console.log(employee.checkIn(8));
console.log(employee.checkIn(9));
let employee2 = {
    supervisors: ['Diana', 'clark'],
    checkIn(horario) {
        if (horario <= 8) {
            return 'OK';
        }
        else {
            return 'late!';
        }
    }
};
console.log(employee2.supervisors);
console.log(employee2.checkIn(8));
console.log(employee2.checkIn(9));
let employee3 = {
    supervisors: ['Bruce', 'Shayera'],
    checkIn(horario) {
        if (horario <= 8) {
            return 'OK';
        }
        else {
            return 'late!';
        }
    }
};
console.log(employee3.supervisors);
console.log(employee3.checkIn(8));
console.log(employee3.checkIn(9));
// Union Types
let bill = 10;
console.log(`my bill is ${bill}!`);
bill = '10';
console.log(`my bill is ${bill}!`);
// nota = true
// never
function error(msg) {
    throw new Error(msg);
}
const product = {
    name: 'oil',
    price: 1,
    validateProduct() {
        if (!this.name || this.name.trim().length == 0) {
            error('a name is required!');
        }
        if (this.price <= 0) {
            error('invalid price!');
        }
        else {
            console.log('OK');
        }
    }
};
product.validateProduct();
let optionalHeight = 12;
optionalHeight = null;
const contact1 = {
    name: 'gistiond',
    tel2: null,
    tel1: '23456783'
};
console.log(contact1.name);
console.log(contact1.tel2, contact1.tel1);
let bankAccount = {
    balance: 3456,
    depositate(value) {
        this.balance += value;
    }
};
let accountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
};
accountHolder.bankAccount.depositate(3000);
console.log(accountHolder);
//# sourceMappingURL=tipo.js.map