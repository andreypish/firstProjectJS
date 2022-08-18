"use strict";


let UserName = prompt(`Как тебя зовут?`, 'Name');
alert(`Тебя зовут ${UserName}`);

let age = prompt(`Сколько тебе лет?`, 18);
alert(`Тебе ${age} лет!`);

let sity = prompt(`Из какого ты города?`, 'Sity');
const result = confirm(`${UserName} ты из ${sity} и тебе ${age} лет?`);
console.log(result);
