// Connection confirmation

console.log("App connected")

// Input Selectors

const inputName = document.getElementById('input-name');
const inputImage = document.getElementById('input-image');
const inputtype = document.getElementById('input-type');
const inputcost = document.getElementById('input-cost');
const inputAttack = document.getElementById('input-attack');
const inputDefence = document.getElementById('input-defence');
const inputPower = document.getElementById('input-power');
const inputToughness = document.getElementById('input-toughness');
const inputMorale = document.getElementById('input-morale');
const inputSize = document.getElementById('input-size');
const inputTraits = document.getElementById('input-traits');

// Output Selectors


const cardName = document.getElementById('card-name');
const cardImage = document.getElementById('card-image');
const cardType = document.getElementById('card-type');
const cardCost = document.getElementById('card-cost');
const cardAttack = document.getElementById('card-attack');
const cardDefence = document.getElementById('card-defence');
const cardPower = document.getElementById('card-power');
const cardToughness = document.getElementById('card-toughness');
const cardMorale = document.getElementById('card-morale');
const cardSize = document.getElementById('card-size');
const cardTraits = document.getElementById('card-traits');


// Button Selectors

const updateBtn = document.getElementById('update');

// Update Card Function

updateBtn.addEventListener('click',()=>{
    cardName.innerHTML = inputName.value
    cardAttack.innerHTML = `+ ${inputAttack.value}`

})