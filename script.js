
let name = document.getElementById('name');

let km = document.getElementById('km');

let age = document.getElementById('age');


let buttonElement = document.getElementById('submit') //object
console.log(buttonElement)


buttonElement.addEventListener('click', function () {
	console.log('click on button')

//variabili prezzo biglietto
let priceticket = km * (0.21);
let juniorPrice = price - (price * 20 / 100).toFixed(2);
let seniorPrice = price - (price * 40 / 100).toFixed(2);



