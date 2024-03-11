
let name = document.getElementById('name');

let km = document.getElementById('km');

let age = document.getElementById('age');


let buttonElement = document.getElementById('submit') //object
console.log(buttonElement)


buttonElement.addEventListener('click', function () {
	console.log('click on button')

//variabili prezzo biglietto
let price = km * (0.21);
let juniorPrice = price - (price * 20 / 100).toFixed(2);
let seniorPrice = price - (price * 40 / 100).toFixed(2);



if(age < 18){
    price = juniorPrice.toFixed(2);
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
} else if (age >=65){
    price = seniorPrice.toFixed(2);
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
} else {
    price = km * 0.21;
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
}